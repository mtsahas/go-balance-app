import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export function IsThisYou() {
  return (
    <Card className="max-w-6xl mx-auto p-6 shadow-lg rounded-2xl border border-gray-200 m-5 ">
      <CardContent className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-green-700 ">
          IS THIS YOU?
        </h2>

        <p className="text-lg">
          Ready to do the necessary work to have more energy, feel alert, and
          facilitate learning?
        </p>
        <p className="text-lg">
          Want to uncover root causes and missing links to health and/or
          learning challenges?
        </p>
        <p className="text-lg">
          Frustrated with therapy, treatment, or educational plans not focusing
          on the whole person or whole child?
        </p>
        <p className="text-lg">
          Struggling with how to implement recommendations given to you by
          professionals?
        </p>
        <p className="text-lg font-semibold">
          You are not alone! I have been in your shoes.
        </p>
        <p className="text-lg">
          With my personal and professional experience, I can guide, educate,
          and empower you to restore balance in your life and/or in your loved
          one's life.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            Schedule an Appointment
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
