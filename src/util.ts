import { RuleCreator } from "@typescript-eslint/utils/eslint-utils";

import { repository, version } from "../package.json";

export interface PluginDocumentation {
	description: string;
	recommended?: boolean;
	requiresTypeChecking: boolean;
}

export const createEslintRule = RuleCreator<PluginDocumentation>((name) => {
	const repoUrl = repository.url.replace(/^git\+/, "").replace(/\.git$/, "");
	return `${repoUrl}/blob/v${version}/src/rules/${name}/documentation.md`;
});
