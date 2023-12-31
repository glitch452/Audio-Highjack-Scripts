var BOOLEAN_REGEX_UPPER = '.*(IS_|ARE_|WAS_|SHOULD_|HAS_|CAN_|DID_|WILL_|ALLOW_|USE_).*';
var BOOLEAN_REGEX_LOWER = BOOLEAN_REGEX_UPPER.toLowerCase();

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['jsdoc', 'import', 'eslint-plugin-unused-imports', 'typescript-enum'],
  extends: [
    'plugin:jsdoc/recommended-typescript-error',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Turn off ESLint formatting rules so that Prettier can take care of formatting. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",

    /**
     * Other Plugin Rules
     */
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    // Use the rule from unused-imports instead of eslint or typescript-eslint
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'error',
    // Typescript already yells if something cannot be resolved
    'import/no-unresolved': 'off',
    // Adjust some JSDoc rules
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-throws': 'error',
    'typescript-enum/no-enum': 'error',
    'typescript-enum/no-const-enum': 'error',

    /**
     * Javascript Rules
     */
    // Consistent block style
    curly: 'error',
    // *Yoda voice* Nullified with eslint any benefits of this are.
    yoda: ['error', 'never', { exceptRange: true }],
    // Prevents applying non atomic updates (race condition risk otherwise) i.e. c += await foo();
    'require-atomic-updates': 'error',
    // Prevents forgetting return in array callbacks! Common mistake
    'array-callback-return': 'error',
    // why are you using alert() >:(
    'no-alert': 'error',
    // deprecated function use.
    'no-caller': 'error',
    // constructors don't need returns
    'no-constructor-return': 'error',
    // Basically don't need an elseif (return;) or else(return) following an if(return) as it already exits control flow.
    'no-else-return': ['error', { allowElseIf: false }],
    // Be explicit with nulls! No == null please!
    'no-eq-null': 'error',
    // Use type-safe equality operators please
    eqeqeq: ['error', 'always'],
    // Security risk!! We do not need eval!
    'no-eval': 'error',
    // Again this is also a security risk we are blocking. We do not need to execute any of these blocked cases.
    'no-implied-eval': 'error',
    // Realistically our use case for bind should be low. However in the cases we 'think' we need it we should check if we actually do.
    'no-extra-bind': 'error',
    // __iterator__ is an obsolete property
    'no-iterator': 'error',
    // We're in 2020's, do you think we need 'go to'-esque labels?
    'no-labels': 'error',
    // Actually a low-key security risk as well, also horrible debugging experience... We shouldn't need to use it for our app.
    'no-new-func': 'error',
    // Usually a mistake
    'no-param-reassign': 'error',
    // Deprecated as of ES 3.1 shouldn't need it!
    'no-proto': 'error',
    // Return assignments are very hard on the eyes! If you need to do return foo = 2; wrap it like so return (foo = 2).
    'no-return-assign': 'error',
    // Did you guess that this is a security risk? If so bingo! javascript: is basically just as dangerous as eval.
    'no-script-url': 'error',
    // The only valid use case for this can be covered with Number.isNan(). If you do have a use case not covered I'm curious to know.
    'no-self-compare': 'error',
    // Tends to obscure what code is actually doing. Parenthesis seem to be able to override it if needed (or eslint comment of course).
    'no-sequences': 'error',
    // We usually want to modify the condition of our loop. If you do need an infinite loop just throw an eslint disable comment near your use.
    'no-unmodified-loop-condition': 'error',
    // Our use-case probably doesn't need the call function but if it does in the future we want to ensure we aren't applying it for no reason!
    'no-useless-call': 'error',
    // Usually a byproduct of refactoring, we shouldn't need to do the following: 'a' + 'b' when we can just do 'ab'.
    'no-useless-concat': 'error',
    // Useless returns clutter up our code.
    'no-useless-return': 'error',
    // Can lead to unexpected behaviour. If we feel we need to override this lets talk about it during PR review!
    'no-delete-var': 'error',
    // Basically prevents us from computing a key when not necessary such as when we use string literals inside of an object.
    'no-useless-computed-key': 'error',
    // Look you do not need to say import { foo as foo } or const { foo: foo } = bar; If for some reason you do please share with the group.
    'no-useless-rename': 'error',
    // The uses for var are very miniscule, and the risks far outweigh the pros of leaving allowing this. You can manually disable on your line if needed.
    'no-var': 'error',
    // Enforces object literal shorthand. I.e. no need to do {a: a, b: 'foo'}, when you can do { a, b: 'foo' }.
    'object-shorthand': ['error', 'always'],
    // If a value isn't being reassigned CONST IT UP!! It will prevent errors in the future.
    'prefer-const': 'error',
    // For variadic function params please use the rest operator. Much cleaner.
    'prefer-rest-params': 'error',
    // For variadic function arguments, use the spread operator over Function.prototype.call. Again much cleaner.
    'prefer-spread': 'error',
    // Prefer template strings to string concatenation. It is the better way to do things.
    'prefer-template': 'error',

    /**
     * Typescript Rules
     */
    // No magic numbers unless you have a license in witchcraft and wizardry signed by Albus Dumbledore himself.
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreEnums: true,
        ignoreTypeIndexes: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignore: [-1, 0, 1],
      },
    ],
    // Keep our code clean one step at a time by not having useless empty constructors!!!
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // Prefer to use interfaces to define object types i.e. interface Foo { bar, bazz } over type Foo = { bar, bazz };
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Can be dangerous, and inefficient in many cases, so we disallow it.
    '@typescript-eslint/no-dynamic-delete': 'error',
    // Cleans our code up by only letting us do the minimum level of non-null assertions.
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    // Always put types for consistency
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    // best practice to have param = someDefaultValue at end of function (use the typescript version of this rule to enable optional support)
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    // Keeps the code cleaner, consistent and easier to read (use the typescript version to avoid reporting incorrect errors)
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    // If using overloads, keep them all together
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    // No sense using await for something that will resolve immediately
    '@typescript-eslint/await-thenable': 'error',
    // To improve readability, use Record<type, type> instead of { [x: type]: type }
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    // Avoid type assertions (i.e. type casting) at all cost!
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
    // Improve readability
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    // If anyone ever wrote this... just no
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    // Make it explicit that a promise's result is not being handled (use `.catch`, `await`, or prepend with `void`)
    '@typescript-eslint/no-floating-promises': 'error',
    // Remember to AWAIT when ts lets you have mishandled promises
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    // For-in is for-objects (which an Array technically is, but you probably wanted the array items, not it's properties)
    '@typescript-eslint/no-for-in-array': 'error',
    // Enforce maximum correctness together with TypeScript's strict mode
    '@typescript-eslint/method-signature-style': ['off', 'property'],
    // Avoid some potentially nasty bugs
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // We really do not need duplicate imports, if you do import x from y, then import z from y, prefer to do import x, z, from y.
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    // Imported config makes these warnings, upgrade to error
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    // No reason to do this, use undefined!
    '@typescript-eslint/no-invalid-void-type': 'error',
    // Can be overridden if the package has no es6 module support
    '@typescript-eslint/no-require-imports': 'error',
    // Like, it's already a boolean, OKAY!
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    // No reason so compare for no reason, right?
    '@typescript-eslint/no-unnecessary-condition': 'error',
    // Avoid the type assertion, if possible!
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // Iterables are great, use them, down with let! (Except maybe in a browser that doesn't support for..of)
    '@typescript-eslint/prefer-for-of': 'error',
    // Much cleaner than checking for >= 0 on indexOf on an arrays
    '@typescript-eslint/prefer-includes': 'error',
    // Should check for null/undefined wherever possible instead of checking falsy to avoid weird bugs with '' or 0 values
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Much cleaner code that is WAYYY more readable!
    '@typescript-eslint/prefer-optional-chain': 'error',
    // Gotta catch 'em all!
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Ooops, unbound.  We got'chyour back!
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    // Which version of the variable is it, who knows? Should reduce much confusion!
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // Don't add extra words or-else Jon will come at you!
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    // Avoid a bit of a foot gun
    '@typescript-eslint/no-base-to-string': 'error',
    // Avoid duplicates!
    '@typescript-eslint/no-duplicate-type-constituents': ['error'],
    // No unnecessary void, only use to indicate an actual value is being discarded
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    // This is evil incarnate
    '@typescript-eslint/no-mixed-enums': 'error',
    // Seems wise
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    // These would be magic numbers/string any ways, we want none of that!
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    // Say no to dead code
    '@typescript-eslint/no-useless-empty-export': 'error',
    // Readability boost, 100%
    '@typescript-eslint/prefer-function-type': 'error',
    // Foot-gun, mic drop
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    // Check the type instead of casting it!
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // Old problems call for modern solutions
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // Probably doing something weird if this rule is triggered
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true, ignoreVoidOperator: false },
    ],
    // Seems like a smell
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // Seems sensible (can be applied automatically too!)
    '@typescript-eslint/prefer-readonly': 'error',
    // Choose a lane
    '@typescript-eslint/promise-function-async': 'error',
    // Consistency is Key
    '@typescript-eslint/member-ordering': ['error', { interfaces: 'never', typeLiterals: 'never' }],
    // Now I know my A-B-C's, next time won’t you sing with me
    '@typescript-eslint/sort-type-constituents': 'error',
    // This rule tries its best to not let us throw literals (why are you throwing 0 >:()! Theres ways around it but please avoid it if you can.
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    // It's the same reference!! (5, 5, 5, 5, 5)
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    // Cluttered space, cluttered mind. Organized surroundings, focused grind.
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // These might be good to add in the future, would require a little work
    // '@typescript-eslint/prefer-readonly-parameter-types': 'error',

    // Explicitly turn OFF these rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/parameter-properties': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    // disable explicitly so that the TS switch-exhaustiveness-check can be useful
    'default-case': ['off'],
    // This rule has been deprecated in favour of the import/no-duplicates rule.
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    // This rule has been deprecated in favour of the naming-convention rule.
    '@typescript-eslint/camelcase': 'off',

    // Consistent naming convention for variables and well, everything
    // LOTS of config for this.  See: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      // Enum members must be UPPER_CASE since they are treated as constants
      { selector: ['enumMember'], format: ['UPPER_CASE'] },
      // Allow destructured variables to keep their name formatting
      {
        selector: ['variable', 'parameter'],
        modifiers: ['destructured'],
        format: null,
        filter: { regex: '.+', match: true }, // Required to take precedence over other rules
      },
      {
        selector: ['variable', 'parameter'],
        modifiers: ['destructured'],
        format: null,
        types: ['function'], // Required to take precedence over other rules
        filter: { regex: '.+', match: true }, // Required to take precedence over other rules
      },
      // Private class properties must be prefixed with an underscore
      {
        selector: 'classProperty',
        format: ['snake_case', 'UPPER_CASE'],
        modifiers: ['private'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      // typeLike (class, interface, typeAlias, enum, typeParameter) should use StrictPascalCase
      { selector: 'typeLike', format: ['StrictPascalCase'] },
      // Functions must use strictCamelCase
      {
        selector: [
          'function',
          'parameter',
          'variable',
          'classMethod',
          'typeMethod',
          'classProperty',
          'typeProperty',
        ],
        format: ['strictCamelCase'],
        types: ['function'], // To scope 'parameter', 'classProperty', 'typeProperty' and 'variable'
        filter: { regex: 'toJSON', match: false },
      },
      // Unused function parameters must begin with an underscore
      {
        selector: ['parameter'],
        format: ['snake_case', 'UPPER_CASE'],
        modifiers: ['unused'],
        leadingUnderscore: 'require',
      },
      {
        selector: ['parameter'],
        format: ['strictCamelCase'],
        modifiers: ['unused'],
        types: ['function'],
        filter: { regex: '.+', match: true }, // Required to take precedence over other rules
        leadingUnderscore: 'require',
      },
      // Variables in general should be snake_case or UPPER_CASE
      {
        selector: ['variable', 'parameter', 'accessor', 'classProperty', 'typeProperty'],
        format: ['snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      // Allow an exception for names that are quoted (i.e. 'Content-Type')
      {
        selector: ['objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      // Constant primitive variables declared at the top-level must be UPPER_CASE
      {
        selector: ['variable'],
        format: ['UPPER_CASE'],
        modifiers: ['const', 'global'],
        types: ['string', 'number'],
      },
      // Booleans should have an appropriate prefix
      // Handle unused parameter booleans
      {
        selector: ['parameter'],
        format: ['snake_case'],
        modifiers: ['unused'],
        types: ['boolean'],
        custom: { regex: BOOLEAN_REGEX_LOWER, match: true },
        filter: { regex: '^_?[a-z]', match: true }, // Only test snake_case in this rule to avoid is_MIXED
        leadingUnderscore: 'require',
      },
      {
        selector: ['parameter'],
        format: ['UPPER_CASE'],
        modifiers: ['unused'],
        types: ['boolean'],
        custom: { regex: BOOLEAN_REGEX_UPPER, match: true },
        filter: { regex: '^_?[A-Z]', match: true }, // Only test UPPER_CASE in this rule to avoid IS_mixed
        leadingUnderscore: 'require',
      },
      // Handle general case booleans
      {
        selector: ['variable', 'parameter', 'classProperty', 'typeProperty'],
        format: ['snake_case'],
        types: ['boolean'],
        custom: { regex: BOOLEAN_REGEX_LOWER, match: true },
        filter: { regex: '^[a-z]', match: true }, // Only test snake_case in this rule to avoid is_MIXED
      },
      {
        selector: ['variable', 'parameter', 'classProperty', 'typeProperty'],
        format: ['UPPER_CASE'],
        types: ['boolean'],
        custom: { regex: BOOLEAN_REGEX_UPPER, match: true },
        filter: { regex: '^[A-Z]', match: true }, // Only test UPPER_CASE in this rule to avoid IS_mixed
      },
      // Handle top-level UPPER_CASE booleans
      {
        selector: ['variable'],
        format: ['UPPER_CASE'],
        modifiers: ['const', 'global'],
        types: ['boolean'],
        custom: { regex: BOOLEAN_REGEX_UPPER, match: true },
        filter: { regex: '.+', match: true }, // Required to take precedence over other rules
      },
    ],
  },
};
