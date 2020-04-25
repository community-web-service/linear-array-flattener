<a name="module_linearArrayFlattener"></a>

## linearArrayFlattener ⇒ <code>Array</code>
Linear function to flatten a multi-dimensional array of arbitrary depth.Linear time of O(n) without recursion.Supports IE > 5.Based on axelduch's Stack Overflow answer [https://stackoverflow.com/a/27282907](https://stackoverflow.com/a/27282907).axelduch provided permission for modified or unmodified redistribution.

**Summary**: Linear function to flatten a multi-dimensional array of arbitrary depth.  
**Returns**: <code>Array</code> - Flattened array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The array to be flattened. |
| [mutable] | <code>boolean</code> | <code>false</code> | Specify mutability of array. 		true: Memory complexity of O(1). 		false: Memory complexity O(n). |

