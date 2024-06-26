/**
 * Check if a brazilian formatted date is valid.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Holyday {
 *   @IsDate()
 *   date: string;
 *
 *   constructor(date: string) { this.date = date };
 * }
 *
 * const errors = await validate(new Holyday('03/08/2017'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Holyday('28/13/2017'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Holyday('03-08-2017'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Holyday('31/03/18'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
declare const IsDate: (validationOptions?: import("class-validator").ValidationOptions) => (object: Object, propertyName: string) => void;
export default IsDate;
