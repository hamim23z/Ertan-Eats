import { createClient } from "../utils/supabase/server";
import RestaurantCard from "../components/RestaurantCard";

export default async function LocationsPage() {
  const supabase = await createClient();

  const { data: restaurants, error } = await supabase
    .from("restaurant")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error);
    return <p>Error loading restaurants.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 1fr, 400px), 1fr))",
        padding: "2rem",
        backgroundColor: "black",
        paddingTop: "200px",
        justifyContent: "center",
      }}
    >
      {restaurants?.map((r) => (
        <RestaurantCard key={r.id} data={r} sx={{}} />
      ))}
    </div>
  );
}
