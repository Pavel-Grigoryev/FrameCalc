import React from 'react';
import Input from '@mui/joy/Input';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectFixConfig, selectLengthConfig, selectStrengthConfig, selectWidthConfig} from './config-selectors';
import Typography from '@mui/material/Typography';
import {FormLabel} from '@mui/joy';
import {selectFixType, selectMaterialsType, selectPipesType} from './material-selector';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import MenuItem from '@mui/material/MenuItem';
import * as Yup from 'yup';
import {asyncCalculationActions, ResultType} from './calculationSlice';
import {useActions} from '../../hooks/useAction';
import FormControl from '@mui/material/FormControl';
import {SyperSelect} from '../../common/SuperSelect/SyperSelect';
import s from './Calculator.module.css';


export const Calculator = () => {

    const lengthConfig = useAppSelector(selectLengthConfig)
    const widthConfig = useAppSelector(selectWidthConfig)
    const strengthConfig = useAppSelector(selectStrengthConfig)
    const materialsType = useAppSelector(selectMaterialsType)
    const pipesType = useAppSelector(selectPipesType)
    const fixType = useAppSelector(selectFixType)
    const fixConfig = useAppSelector(selectFixConfig)


    const {updateCalculationTC} = useActions(asyncCalculationActions);

    const inputStrength = strengthConfig.map(el => (<MenuItem key={el.key} value={el.step}>{el.name}</MenuItem>))
    const inputMaterialType = materialsType.map((el, index) => (
        <MenuItem key={index} value={el.name}>{el.name}</MenuItem>))
    const inputPipeType = pipesType.map((el, index) => (
        <MenuItem key={index} value={el.name}>{el.name}</MenuItem>))

    const calculatePrice = (values: InputValueType) => {
        let calcResult = {} as ResultType;
        if (values.width && values.length && values.strength) {
            const area = values.length * values.width;
            calcResult.area = area;

            const currentMaterial = materialsType.find(el => el.name === values.material);
            const currentPipe = pipesType.find(el => el.name === values.pipe);

            if (currentMaterial?.width && currentPipe?.width) {
                const quantityLists = Math.ceil(area / currentMaterial.width)
                const costLists = +(quantityLists * currentMaterial.price).toFixed(1)
                calcResult.quantityLists = quantityLists
                calcResult.costLists = costLists
                calcResult.listName = currentMaterial.name
                calcResult.listUnit = currentMaterial.unit
                const quantityPipesLength = Math.ceil(values.length / values.strength);
                const stepFrameLength = ((values.length - quantityPipesLength * currentPipe.width / 1000) / quantityPipesLength).toFixed(2)

                const sumLenghPipesInWidth = quantityPipesLength * values.width
                const quantityPipesWidth = Math.ceil(values.width / values.strength)
                const stepFrameWidth = ((values.width - quantityPipesWidth * currentPipe.width / 1000) / quantityPipesWidth).toFixed(2)
                const sumLenghPipesInLength = quantityPipesWidth * values.length - (currentPipe.width / 1000) * quantityPipesLength * quantityPipesWidth
                const totalPipesLength = Math.ceil(sumLenghPipesInWidth + sumLenghPipesInLength)
                const costPipes = +(totalPipesLength * currentPipe.price).toFixed(1)
                calcResult.stepFrameWidth = stepFrameWidth
                calcResult.stepFrameLength = stepFrameLength
                calcResult.totalPipesLength = totalPipesLength
                calcResult.costPipes = costPipes
                calcResult.pipeName = currentPipe.name
                calcResult.pipeUnit = currentPipe.unit

                const currentFix = fixConfig.find(el => el.key === currentMaterial.material);
                if (currentFix?.value && fixType?.name && fixType?.name) {
                    const quantityFixes = Math.ceil(currentFix.value * area)
                    calcResult.costFixes = +(quantityFixes * fixType.price).toFixed(1)
                    calcResult.quantityFixes = quantityFixes
                    calcResult.fixName = fixType.name
                    calcResult.fixUnit = fixType.unit
                }
            }
        }
        return calcResult
    }

    const formik = useFormik({
        initialValues: {
            material: materialsType[0].name,
            pipe: pipesType[0].name,
            length: lengthConfig?.min,
            width: widthConfig?.min,
            strength: strengthConfig[0].step,
        },
        validationSchema: Yup.object({
            length: Yup.number(),
            width: Yup.number()
        }),
        onSubmit: (values: InputValueType) => {
            updateCalculationTC(calculatePrice(values));
        },
    })


    return (
        <div>
            <Typography variant="h6" color="inherit" component="div" sx={{marginBottom: '20px'}}>
                Выбор материала
            </Typography>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <SyperSelect label={'Выберите листы покрытия'} formikGetFieldProps={formik.getFieldProps('material')}>
                    {inputMaterialType}
                </SyperSelect>
                <SyperSelect label={'Выберите тип трубы'} formikGetFieldProps={formik.getFieldProps('pipe')}>
                    {inputPipeType}
                </SyperSelect>
                <FormControl>
                    <FormLabel sx={{marginBottom: '7px'}}>
                        Длина от {lengthConfig?.min}м до {lengthConfig?.max}м
                    </FormLabel>
                    <Input
                        type="number"
                        placeholder={lengthConfig?.name}
                        slotProps={{
                            input: {
                                min: lengthConfig?.min,
                                max: lengthConfig?.max,
                                step: lengthConfig?.step,
                            },
                        }}
                        {...formik.getFieldProps('length')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel sx={{marginBottom: '7px'}}>
                        Ширина от {widthConfig?.min}м до {widthConfig?.max}м
                    </FormLabel>
                    <Input
                        type="number"
                        placeholder={widthConfig?.name}
                        slotProps={{
                            input: {
                                min: widthConfig?.min,
                                max: widthConfig?.max,
                                step: widthConfig?.step,
                            },
                        }}
                        {...formik.getFieldProps('width')}
                    />
                </FormControl>
                <SyperSelect label={'Выберите прочность'} formikGetFieldProps={formik.getFieldProps('strength')}>
                    {inputStrength}
                </SyperSelect>
                <Button type={'submit'} variant={'contained'} color={'primary'}>
                    Рассчитать стоимость
                </Button>
            </form>

        </div>
    );
};


//types


export type InputValueType = {
    material: string
    pipe: string
    length: number | undefined
    width: number | undefined
    strength: number | undefined
}

