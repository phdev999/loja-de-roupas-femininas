import styled from "styled-components"

export const DPStyle= styled.section `
    section {
	display: flex;
	gap: 50px;
}

img {
	width: 200px;
	height: 300px;
	background-color: #c9c9c9;
}

#info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

#description {
	font-size: 18px;
}

#description span {
	display: block;
}

small {
	display: block;
	color: grey;
}

button {
	width: 100%;
	height: 30px;
	margin-top: 2px;
	font-size: 18px;
}

@media screen and (min-width: 1000px) {
	img {
		width: 400px;
		height: 500px;
	}
	
	button {
		height: 50px;
		margin-top: 2px;
		font-size: 20px;
	}
}
`