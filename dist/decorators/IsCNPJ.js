"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateDecorator_1 = require("../utils/generateDecorator");
const brazilian_values_1 = require("brazilian-values");
/**
 * Check if value is a valid CNPJ.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Company {
 *   @IsCNPJ()
 *   cnpj: string;
 *
 *   constructor(cnpj: string) { this.cnpj = cnpj };
 * }
 *
 * const errors = await validate(new Company('41142260000189'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Company('45.723.174/0001-10'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Company('411407182'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Company('11.111.111/1111-11'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsCNPJ = (0, generateDecorator_1.default)(brazilian_values_1.isCNPJ, 'isCNPJ', '$property must be a valid CNPJ');
exports.default = IsCNPJ;
