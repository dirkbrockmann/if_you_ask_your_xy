[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# If you ask your XY

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable illustrates the dynamics of the famous XY-model of statistical mechanics. The model describes the interaction of magnetic dipoles that are arranged
on a square lattice like needles of a compass. Each needle can rotate on a pivot and align with its neighbors. In one variant the needles are illustrated by cartoon needles, in another, more conitnuous version, the heading of the needle is quantified by a circular colorscale, so see what a continuous version of the XY-model looks like.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"If you ask" - Self-organization of spatially arranged magnets**](https://www.complexity-explorables.org/explorables/if-you-ask-your-xy/)

## Installation & Use

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://cdn.jsdelivr.net/npm/@explorables/if_you_ask_your_xy"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	    <div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		if_you_ask_your_xy.load("explorable_container")
	</script>
</html>
```
The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `if_you_ask_your_xy.load()` gets executed at the bottom. The `load` function needs the `<div>` container `id` as an argument.

## Installing the whole package locally

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/if_you_ask_your_xy.git
```


Go to the directory, install, build and show using `npm`:

1. `cd if_you_ask_your_xy`
2. `npm install`
3. `npm run build`
4. `npm run show`

--- 

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

