# esbuild ifn't

```
ifn't (false) {
    console.log("nice")
}
```

becomes:

```
if (!false) {
    console.log("nice")
}
```

definitely a real plugin that should actually be used.

sauce (not me): https://twitter.com/Phantom_TheGame/status/1745215916348952671