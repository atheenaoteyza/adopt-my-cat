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

  const [skills, setSkills] = useState([
    { name: "Frontend", value: 50 },
    { name: "Backend", value: 40 },
    { name: "DevOps", value: 20 },
    { name: "Problem Solving", value: 35 },
    { name: "Tooling", value: 30 },
  ]);

  const handleAddXp = () => {
    const newXp = xp + 50;
    if (newXp >= xpToNextLevel) {
      setXp(newXp - xpToNextLevel);
      setLevel(level + 1);
      setSkillPoints(skillPoints + 5); // Award 5 skill points per level up
    } else {
      setXp(newXp);
    }
  };

  const allocateSkillPoint = (index) => {
    if (skillPoints > 0) {
      const newSkills = [...skills];
      newSkills[index].value += 5;
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
        {skills.map((skill, index) => (
          <Card key={skill.name}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <Progress value={skill.value} className="h-3 mt-2" />
              </div>
              <Button
                onClick={() => allocateSkillPoint(index)}
                disabled={skillPoints === 0}
              >
                +
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
