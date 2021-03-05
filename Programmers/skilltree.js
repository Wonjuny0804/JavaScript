const solution = (skill, skill_trees) => {
  // extraction
  const extractedSkillTrees = skill_trees.map(skillTree => skillTree.split('').filter(skillInTree => skill.split('').includes(skillInTree)));

  const possibleSkillTrees = extractedSkillTrees.filter(skillTree => {
    for (let i = 0; i < skillTree.length; i++) if (skillTree[i] !== skill[i]) return false;
    return true;
  });
  return possibleSkillTrees.length;
};

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
