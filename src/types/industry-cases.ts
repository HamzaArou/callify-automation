export interface ComplexityLevel {
  title: string;
  description: string;
  items: string[];
}

export interface ComplexityLevels {
  [key: string]: {
    [key: string]: ComplexityLevel;
  };
}

export interface TestCase {
  title: string;
  description: string;
}