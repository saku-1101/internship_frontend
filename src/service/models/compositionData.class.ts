interface propsCompositionData{
    year: number;
    value: number;
  }

export class propsComposition {
    name: string;
    code: number; 
    data: propsCompositionData;
  
    constructor(prefName: string, prefCode: number, element: propsCompositionData) {
      this.name = prefName;
      this.code = prefCode;
      this.data = element;
    }
}