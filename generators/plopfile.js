export default plop => {
	// create your generators here
	plop.setGenerator("component", {
		description: "Create a component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
		],
		actions: [
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/index.tsx",
				templateFile: "templates/Template.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/styles.scss",
				templateFile: "templates/styles.scss.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: "templates/Story.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
				templateFile: "templates/Test.spec.tsx.hbs",
			},
		],
	});

	plop.setGenerator("page", {
		description:	"Create a page",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your page name?"
			}
		],
		actions: [
			{
				type: "add",
				path: "../src/pages/{{pascalCase name}}/index.tsx",
				templateFile: "templates/Template.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/pages/{{pascalCase name}}/styles.scss"
			},
			{
				type: "add",
				path: "../src/pages/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: "templates/Story.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "../src/pages/{{pascalCase name}}/{{pascalCase name}}.spec.tsx",
				templateFile: "templates/Test.spec.tsx.hbs",
			},
		]
	})
};
