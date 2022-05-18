// creating an array and passing the nuimber, questions, options and answers

let data = [
	{
	numb: 1,
	question: "_______ means the process of addition of hydrogen to an edible vegetable oil using a catalyst to produce a fat with semi-solid consistency",
	answer: "Hydrogenation",
	options: [
		"Reduction",
		"Substitution",
		"Oxidation",
		"Hydrogenation",
		"None of the above"
	]
	},

	{
	numb: 2,
	question: "Hydrogenation means the process of _______ to an edible vegetable oil using a catalyst to produce a fat with semi-solid consistency",
	answer: "addition of hydrogen",
	options: [
		"removal of oxygen",
		"addition of hydrogen",
		"formation of double bond",
		"removal of hydrogen",
		"None of the above"
	]
	},
	
	{
	numb: 3,
	question: "_____ means any vegetable oil which is obtained by expression or solvent extraction of vegatble oil bearing materials, deacidified with alkali and/ or by physical refining and/or by miscella refining using permitted food grade solvents and/or degumming followed by bleaching with absorbent earth and/or carbon and deodorized with steam without using any chemical agents",
	answer: "Refined vegetable oil",
	options: [
		"Cold pressed oil",
		"Refined vegetable oil",
		"Natural oil",
		"Purified oil",
		"None of the above"
	]
	},

	{
	numb: 4,
	question: "_____ means a process by which an expressed vegetable oil or a solvent-extracted oil is deacidified",
	answer: "Refining",
	options: [
		"Refining",
		"Salting",
		"Ozonification",
		"Purifying",
		"None of the above"
	]
	},

	{
	numb: 5,
	question: "Refining means a process by which an expressed vegetable oil or a solvent-extracted oil is _______",
	answer: "deacidified",
	options: [
		"hydrogenated",
		"filtered",
		"deacidified",
		"fortified",
		"None of the above"
	]
	},

	{
	numb: 6,
	question: "Refinig means a process by which an expressed vegetable oil or a solvent extracted oil is deacidified by ______",
	answer: "All the above",
	options: [
		"alkali",
		"physical refining",
		"miscella refining",
		"Process of degumming",
		"All the above"
	]
	},
	
	{
	numb: 7,
	question: "_____ is done using permitted food grade solvent followed by bleaching with absorbent Earth and/or activated carbon or both of them and deodorized with steam without using any other chemical agent",
	answer: "Miscella refining",
	options: [
		"Physical refining",
		"Chemical refining",
		"Safe refining",
		"Miscella refining",
		"None of the above"
	]
	},

	{
	numb: 8,
	question: "The process of degumming is done using _________",
	answer: "Both a and b",
	options: [
		"Phosphoric acid",
		"Citric acid",
		"Only a",
		"Both a and b",
		"None of the above"
	]
	},
	
	{
	numb: 9,
	question: "_______ means any vegatable oil obtained from oil bearing material by the process of extraction by a solvent",
	answer: "Solvent extracted oil",
	options: [
		"Solvent extracted edible flour",
		"Solvent extracted oil",
		"Chemically extracted oil",
		"Cold pressed oil",
		"None of the above"
	]
	},

	{
	numb: 10,
	question: "______ means the ground material obtained from specially prepared deoiled meal, that is the residual material left over when oil is extracted by a solvent from an oil cake immediately following single pressing of good quality edible oilseeds",
	answer: "Solvent extracted edible flour",
	options: [
		"Solvent extracted edible flour",
		"COld pressed edible flour",
		"Deoiled meal",
		"Defatted meal",
		"None of the above"
	]
	},

	{
	numb: 11,
	question: "Solvent extracted flour is the residual material left over when oil is extracted by a solvent from oil cake following the _______ of good quality edible seeds",
	answer: "Single-pressing",
	options: [
		"Repeated-pressing",
		"Double-pressing",
		"Single-pressing",
		"Both a and b",
		"None of the above"
	]
	},
	
	{
	numb: 12,
	question: "_____ means oils produced from oil cakes or oil seeds or oil bearing materials of plant origin and containing glycerides",
	answer: "Vegetable oil",
	options: [
		"Vegan oil",
		"Vegetable oil",
		"Both a and b",
		"Mineral oil",
		"None of the above"
	]
	},

	{
	numb: 13,
	question: "Vegetable oil means oil produced from oil cakes or oil seeds or oil bearing materials of plant origin and containing",
	answer: "glycerides",
	options: [
		"emulsifiers",
		"lecithin",
		"protein",
		"glycerides",
		"None of the above"
	]
	},

	{
	numb: 14,
	question: "______ means any product obtained for edible purposes by subjecting one or more edible oils to any or a combination of processes such as refining, blending, hydrogenation or interesterification or winterization",
	answer: "Vegetable oil product",
	options: [
		"Vegetable oil product",
		"Animal oil product",
		"Mineral oil product",
		"All the above",
		"None of the above"
	]
	},

	{
	numb: 15,
	question: "Vegetable oil product means any product obtained for edible purposes by subjecting one or more edible oil to ______",
	answer: "All the above",
	options: [
		"refining",
		"blending",
		"hydrogenation",
		"interesterification or winterization",
		"All the above"
	]
	},
	
	{
	numb: 16,
	question: "_____ means an emulsion of oils and fats in water",
	answer: "Margarine",
	options: [
		"Lard",
		"Margarine",
		"Milk",
		"Cream",
		"None of the above"
	]
	},

	{
	numb: 17,
	question: "Margarine is a/an __________",
	answer: "Emulsion",
	options: [
		"Suspension",
		"Emulsion",
		"Colloid",
		"Solution",
		"None of the above"
	]
	},
	

];


for (let i = data.length - 1; i>0; i--){
	let j = Math.floor(Math.random() * i)
	let k = data[i]
	data[i] = data[j]
	data[j] = k
	}

let questions =[]


for (let a = questions.length - 1; a>0; a--){
	let b = Math.floor(Math.random()*a)
	let c = questions[a]
	questions[a] = questions[b]
	questions[b] = c
	}
