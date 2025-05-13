// import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
"use client"
export default async function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome to my world</p>

      {/* <Card>
        <CardHeader>
          <CardTitle>Welcome back, {user.name}!</CardTitle>
          <CardDescription>You're signed in with {user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is your protected dashboard page.</p>
        </CardContent> */}
      {/* </Card> */}
    </div>
  )
}

