### Return Value
```
{ code, result: {*} }
```
code will always exist. If not error code and expect sth, then get it from result obj.

### Enroll process
```
|--enroll
|
|----> getstate <----|
|                    ^
|----> if(not done)--|
|
|----> else
|
|----> success
```

### Verify process

```
|--verify
|
|----> getstate<-----|
|                    ^
|----> if(not done)--|
|
|----> else
|
|----> return result
```