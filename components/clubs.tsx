export default function Clubs() {
  const clubs = [
    "Student Tech Track at TUM",
    "Youth Volunteer, Colombian Red Cross – Youth Team",
    "Yearbook Club (Co-President)",
    "Executive Team Member – Computer Science Student Association",
    "Executive Team Member – Spanish Student Association",
    "Executive Team Member – Management and Economic Student Association",
  ]

  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-12 text-black">Clubs & Extracurriculars</h2>

      <div className="space-y-3">
        {clubs.map((club, index) => (
          <div key={index} className="text-black">
            • {club}
          </div>
        ))}
      </div>
    </section>
  )
}
