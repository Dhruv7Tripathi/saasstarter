"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { getUserProfile } from "@/lib/auth"
// import { PaymentHistory } from "@/components/payment-history"
// import { RazorpayCheckout } from "@/components/razorpay-checkout"

interface UserProfile {
  id: string
  name: string
  email: string
}

export default function DashboardPage() {
  // const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   async function loadUserProfile() {
  //     try {
  //       const profile = await getUserProfile()
  //       setUser(profile)
  //     } catch (error) {
  //       // User is not authenticated, redirect to login
  //       router.push("/login")
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   loadUserProfile()
  // }, [router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in the useEffect
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name:</span> {user.name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {user.email}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your payments and subscriptions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <Button className="w-full" onClick={() => document.getElementById("payment-modal")?.showModal()}>
              Make a Payment
            </Button> */}
            <Button variant="outline" className="w-full">
              View Subscription
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payments" className="mt-10">
        <TabsList className="grid w-full md:w-[400px] grid-cols-2">
          <TabsTrigger value="payments">Payment History</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="payments" className="mt-6">
          {/* <PaymentHistory /> */}
        </TabsContent>
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="marketing-emails" className="rounded border-gray-300" />
                  <label htmlFor="marketing-emails">Receive marketing emails</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="payment-notifications"
                    className="rounded border-gray-300"
                    defaultChecked
                  />
                  <label htmlFor="payment-notifications">Payment notifications</label>
                </div>
              </div>
              <Button variant="outline">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Payment Modal */}
      <dialog id="payment-modal" className="modal">
        <div className="modal-box bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="font-bold text-lg mb-4">Make a Payment</h3>
          {/* <RazorpayCheckout amount={1000} /> */}
          <div className="modal-action mt-6">
            <form method="dialog">
              <Button variant="outline">Close</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
