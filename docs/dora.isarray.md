<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yincw/dora](./dora.md) &gt; [isArray](./dora.isarray.md)

## isArray variable

检测给定值是否为 Array（数组）类型

**Signature:**

```typescript
isArray: any
```

## Remarks

检测给定值是否为 Array（数组）类型；如果是，返回 true，否则返回 false。

## Example

传入值为数组，返回 true。

```
typeUtil.isArray([]) // => true
```
传入值为非数组，返回 false。

```
typeUtil.isArray('') // => false
```

