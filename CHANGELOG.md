# Bloomer Changelog

## 0.4.0 - 2017-05-31
### Added
- withHelpersModifiers HOC was added to index, so everyone can extend their components with Bulma helpers
- HeroVideo Component
- hasAlignedText and hasColor Helper Modifiers
### Breaking
- API for Column, Title, Subtitle and HelpersModifiers (rensponsive helpers) where changed, so less props are used.

## 0.3.0 - 2017-05-29
### Added
- All Bulma/Components.
- This is the first release with all Bulma Components (components/elements/grid/layout).

## 0.2.5 - 2017-05-28
### Added
- This changelog.
- All Elements Components.

## 0.2.4 - 2017-05-28
### Added
- All Helpers Modifiers.

## 0.2.3 - 2017-05-25
### Added
- All Grid Components.

## 0.2.2 - 2017-05-23
### Added
- All Layout Components.

### Removed
- classNames wrapper removed since this was iterating trough all modifiers. Instead we use get*Modifiers functions with combineModifiers, so the library iterate only to possible modifiers.

## 0.0.1 - 2017-05-04
### Added
- Components: Box, Tabs, Pagination.