export interface UseCase {
  title: string;
  description: string;
  roiStat: string;
  example: string;
}

export interface UseCaseGroup {
  title: string;
  description: string;
  cases: UseCase[];
}

export interface TestCase {
  title: string;
  description: string;
}

export interface ComplexityLevel {
  title: string;
  description: string;
  items: string[];
}