import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function IsThisYou() {
  return (
    <div className="max-w-6xl mx-auto p-6 shadow-lg bg-white rounded-2xl border border-gray-200 m-5 justify-center items-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold green-700 ">IS THIS YOU?</h2>
        <ul className="text-lg list-disc text-left list-inside mx-auto">
          <li>
            Are you ready to work to restore balance, boost energy, and enhance
            focus and learning?
          </li>
          <li>
            Do you want to uncover root causes and missing links affecting
            health, well-being, and daily function?
          </li>
          <li>
            Are you frustrated with therapy, treatments, or educational plans
            that don’t address the whole person?
          </li>
          <li>
            Do you struggle with implementing professional recommendations in a
            way that truly works for you or your loved one?
          </li>
        </ul>

        <p className="text-lg">
          If you answered <b>yes</b>, you are not alone. I’ve walked this path,
          both personally and professionally.
        </p>

        <p className="text-lg">
          {" "}
          With experience, empathy, and proven strategies, I can{" "}
          <b>guide, educate, and empower</b> you to restore balance in your life
          and unlock new possibilities for learning, communication, and
          well-being.
        </p>
      </div>
    </div>
  );
}
