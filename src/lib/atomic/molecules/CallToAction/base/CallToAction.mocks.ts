import { ICallToAction } from './CallToAction';

const base: ICallToAction = {
  title: "Hello World!",
  subtitle: "This is the subtitle",
  buttonText: "This is the button!",
  buttonClick: (e) => { },
};

export const mockCallToActionProps = {
  base,
};