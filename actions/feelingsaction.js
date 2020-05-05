
export function feelingsaction(sampleText, sampleImage, buttonClicked) {
  return {
    type: 'Feelings Updated',
    buttonValue: sampleText,
    imageValue: sampleImage,
    buttonClicked: buttonClicked
  }
}
