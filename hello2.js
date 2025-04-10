import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProgressDashboard() {
  const [xp, setXp] = useState(300);
  const [level, setLevel] = useState(3);
  const [skillPoints, setSkillPoints] = useState(0);
  const xpToNextLevel = level * 100;
  const progressPercent = (xp / xpToNextLevel) * 100;

  const [skills, setSkills] = useState({
    Frontend: {
      progress: 50,
      subSkills: [
        { name: "HTML", value: 10 },
        { name: "CSS", value: 10 },
        { name: "JS", value: 10 },
        { name: "React", value: 10 },
        { name: "Next.js", value: 10 },
      ],
    },
    Backend: { progress: 40 },
    DevOps: { progress: 20 },
    ProblemSolving: { progress: 35 },
    Tooling: { progress: 30 },
  });

  const handleAddXp = () => {
    const newXp = xp + 50;
    if (newXp >= xpToNextLevel) {
      setXp(newXp - xpToNextLevel);
      setLevel(level + 1);
      setSkillPoints(skillPoints + 5);
    } else {
      setXp(newXp);
    }
  };

  const allocateSkillPoint = (category, subSkillIndex) => {
    if (skillPoints > 0) {
      const newSkills = { ...skills };
      newSkills[category].subSkills[subSkillIndex].value += 5;
      newSkills[category].progress =
        newSkills[category].subSkills.reduce(
          (total, sub) => total + sub.value,
          0
        ) / newSkills[category].subSkills.length;
      setSkills(newSkills);
      setSkillPoints(skillPoints - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card>
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold">Level {level}</h2>
          <p className="text-sm text-gray-500">
            XP: {xp} / {xpToNextLevel}
          </p>
          <Progress value={progressPercent} className="h-3 my-3" />
          <p className="text-sm font-medium">Skill Points: {skillPoints}</p>
          <Button onClick={handleAddXp}>Add XP</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {Object.entries(skills).map(([category, skill]) => (
          <Card key={category}>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">{category}</h3>
              <Progress value={skill.progress} className="h-3 mt-2" />
              {skill.subSkills && (
                <div className="mt-2 space-y-2">
                  {skill.subSkills.map((subSkill, index) => (
                    <div
                      key={subSkill.name}
                      className="flex justify-between items-center"
                    >
                      <span>{subSkill.name}</span>
                      <Button
                        onClick={() => allocateSkillPoint(category, index)}
                        disabled={skillPoints === 0}
                      >
                        +
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
