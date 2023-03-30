import React from 'react';
import Input from '@mui/joy/Input';
import {useAppSelector} from '../../hooks/useAppSelector';
import Typography from '@mui/material/Typography';
import {FormLabel} from '@mui/joy';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import MenuItem from '@mui/material/MenuItem';
import * as Yup from 'yup';
import {useActions} from '../../hooks/useAction';
import FormControl from '@mui/material/FormControl';
import {SyperSelect} from '../../common/SuperSelect/SyperSelect';
import s from './Calculator.module.css';
import {calculationActions, configSelectors, materialSelectors} from './index';
import {calculatePrice} from '../../utils/calculatePrice-utils';


export const Calculator = () => {

    const lengthConfig = useAppSelector(configSelectors.selectLengthConfig);
    const widthConfig = useAppSelector(configSelectors.selectWidthConfig);
    const strengthConfig = useAppSelector(configSelectors.selectStrengthConfig);
    const materialsType = useAppSelector(materialSelectors.selectMaterialsType);
    const pipesType = useAppSelector(materialSelectors.selectPipesType);
    const fixType = useAppSelector(materialSelectors.selectFixType);
    const fixConfig = useAppSelector(configSelectors.selectFixConfig);


    const {updateCalculationTC} = useActions(calculationActions);

    const inputStrength = strengthConfig.map(el => (<MenuItem key={el.key} value={el.step}>{el.name}</MenuItem>));
    const inputMaterialType = materialsType.map((el, index) => (
        <MenuItem key={index} value={el.name}>{el.name}</MenuItem>));
    const inputPipeType = pipesType.map((el, index) => (
        <MenuItem key={index} value={el.name}>{el.name}</MenuItem>));


    const filterCalculateData = (values: InputValueType) => {
        if (values.width && values.length && values.strength) {
            const currentMaterial = materialsType.find(el => el.name === values.material);
            const currentPipe = pipesType.find(el => el.name === values.pipe);
            const currentFix = fixConfig.find(el => el.key === currentMaterial?.material);
            if (currentMaterial !== undefined && currentPipe !== undefined && currentFix !== undefined && fixType !== undefined) {
                const finalCalc = calculatePrice(values.width, values.length, values.strength, currentMaterial, currentPipe, currentFix, fixType);
                if (finalCalc) {
                    updateCalculationTC(finalCalc);
                }
            }
        }
    };


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
            console.log(values);
            filterCalculateData(values);
        },
    });


    return (
        <div>
            <Typography variant="h6" color="inherit" component="div" sx={{marginBottom: '20px'}}>
                Выбор материала
            </Typography>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <SyperSelect label={'Выберите листы покрытия'}
                             formikGetFieldProps={formik.getFieldProps('material')}>
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

