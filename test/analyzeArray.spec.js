const analyze=require('../functions/analyzeArray.js');
test('analyzes an array of positive numbers',function (){
    expect(analyze([1,2,3,4])).toEqual({'average':2.5,'min':1,'max':4,'length':4});
});

test('analyzes an array of non-positive numbers',function (){
    expect(analyze([-100,-22,0,-54,-10])).toEqual({'average':-37.2,'min':-100,'max':0,'length':5});
});

test('analyzes an array of  numbers whose sum is 0',function (){
    expect(analyze([-100,48,28,4,12,8])).toEqual({'average':0,'min':-100,'max':48,'length':6});
});