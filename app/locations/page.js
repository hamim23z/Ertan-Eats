import { createClient } from "../utils/supabase/server";
import RestaurantCard from "../components/RestaurantCard";

export default async function LocationsPage() {
  const supabase = await createClient();
  const { data: restaurant, error } = await supabase
    .from("restaurant")
    .select("*");

  console.log("restaurants:", restaurant, "error:", error);
  if (error) {
    console.error("Supabase fetch error:", error);
    return <p>Error loading restaurants.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        padding: "2rem",
      }}
    >
      {restaurant?.map((r) => (
        <RestaurantCard key={r.id} data={r} />
      ))}
    </div>
  );
}
