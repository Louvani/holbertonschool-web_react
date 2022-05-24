interface MajorCredits {
  credits: number;
  type: string;
}

interface MinorCredits {
  credits: number;
  type: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return {
    credits: subject1 + subject2,
    type: 'Mayor'
  }
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return {
    credits: subject1 + subject2,
    type: 'Minor'
  }
}
