/**
 * Check if value is a valid CEP.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Location {
 *   @IsCEP()
 *   cep: string;
 *
 *   constructor(cep: string) { this.cep = cep };
 * }
 *
 * const errors = await validate(new Location('50.833-000'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Location('02998-050'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Location('00000000'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Location('0'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Location('1982891928981982198'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
declare const IsCEP: (validationOptions?: import("class-validator").ValidationOptions) => (object: Object, propertyName: string) => void;
export default IsCEP;
