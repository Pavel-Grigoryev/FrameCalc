import {calculatePrice} from './calculatePrice-utils';


test('calculation result should be rigth', () => {

    const width = 5;
    const length = 20;
    const strength = 0.8;
    const currentMaterial = {
        type: 'list',
        name: 'Лист-3 0.5 ширина 1.2м',
        material: 'plastic',
        unit: 'м2',
        width: 1.2,
        price: 15
    };
    const currentPipe = {
        type: 'pipe',
        name: 'Труба 20х20',
        unit: 'мп',
        width: 20,
        price: 18
    };
    const currentFix = {
        type: 'fix',
        key: 'plastic',
        name: 'Пластик',
        value: 10
    };

    const fixType = {
        "type": "fix",
        "name": "Саморез",
        "unit": "шт",
        "price": 1.1
    }

    const calculationResult = calculatePrice(width, length, strength, currentMaterial, currentPipe, currentFix, fixType);
    expect(calculationResult?.area).toBe(100);
    expect(calculationResult?.quantityLists).toBe(84);
    expect(calculationResult?.costLists).toBe(1260);
    expect(calculationResult?.stepFrameLength).toBe('0.75');
    expect(calculationResult?.stepFrameWidth).toBe('0.60');
    expect(calculationResult?.totalPipesLength).toBe(286);
    expect(calculationResult?.costPipes).toBe(5148);
    expect(calculationResult?.quantityFixes).toBe(1000);
    expect(calculationResult?.costFixes).toBe(1100);
});

