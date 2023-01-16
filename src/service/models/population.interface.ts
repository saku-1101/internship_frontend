export interface compositionOfPopulation {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: [
          {
            year: number;
            value: number;
          }
        ];
      }
    ];
  }