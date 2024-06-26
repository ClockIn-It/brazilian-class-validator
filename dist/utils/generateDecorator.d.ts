import { ValidationOptions } from 'class-validator';
declare const generateDecorator: (validationFunc: (value: any) => boolean, name: string, message: string) => (validationOptions?: ValidationOptions) => (object: Object, propertyName: string) => void;
export default generateDecorator;
