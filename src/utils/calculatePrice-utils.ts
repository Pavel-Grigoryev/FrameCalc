import {ConfigType, MaterialType} from '../api/api-types';
import {ResultType} from '../features/Calculator/calculationSlice';

export const calculatePrice = (width: number, length: number, strength: number, currentMaterial: MaterialType, currentPipe: MaterialType, currentFix: ConfigType, fixType: MaterialType) => {
    let calcResult = {} as ResultType;

    const area = length * width;
    calcResult.area = area;

    if (currentMaterial.width && currentPipe.width && currentFix.value) {
        const quantityLists = Math.ceil(area / currentMaterial.width);
        const costLists = +(quantityLists * currentMaterial.price).toFixed(1);
        calcResult.quantityLists = quantityLists;
        calcResult.costLists = costLists;
        calcResult.listName = currentMaterial.name;
        calcResult.listUnit = currentMaterial.unit;
        debugger

        const quantityPipesLength = Math.ceil(length / strength) + 1;
        const stepFrameLength = ((length - quantityPipesLength * currentPipe.width / 1000) / quantityPipesLength).toFixed(2);
        const sumLenghPipesInWidth = quantityPipesLength * width;
        const quantityPipesWidth = Math.ceil(width / strength) + 1;
        const stepFrameWidth = ((width - quantityPipesWidth * currentPipe.width / 1000) / quantityPipesWidth).toFixed(2);
        const sumLenghPipesInLength = quantityPipesWidth * length - (currentPipe.width / 1000) * quantityPipesLength * quantityPipesWidth;
        const totalPipesLength = Math.ceil(sumLenghPipesInWidth + sumLenghPipesInLength);
        const costPipes = +(totalPipesLength * currentPipe.price).toFixed(1);
        calcResult.stepFrameWidth = stepFrameWidth;
        calcResult.stepFrameLength = stepFrameLength;
        calcResult.totalPipesLength = totalPipesLength;
        calcResult.costPipes = costPipes;
        calcResult.pipeName = currentPipe.name;
        calcResult.pipeUnit = currentPipe.unit;

        const quantityFixes = Math.ceil(currentFix.value * area);
        calcResult.costFixes = +(quantityFixes * fixType.price).toFixed(1);
        calcResult.quantityFixes = quantityFixes;
        calcResult.fixName = fixType.name;
        calcResult.fixUnit = fixType.unit;

        return calcResult;
    }
};