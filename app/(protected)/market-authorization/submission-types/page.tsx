import { SubmissionTypes } from "@/components/market-authorization/submission-types"

export default function SubmissionTypesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Submission Type Classification</h1>
      <SubmissionTypes />
    </div>
  )
}
