import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users,
  Building,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Plus,
  Edit,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { label: "Active Projects", value: "12", icon: Building, color: "bg-primary" },
    { label: "Total Customers", value: "48", icon: Users, color: "bg-construction" },
    { label: "Monthly Revenue", value: "$485K", icon: DollarSign, color: "bg-green-500" },
    { label: "Pending Quotes", value: "8", icon: Clock, color: "bg-yellow-500" }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Thompson Luxury Home",
      customer: "Sarah Thompson",
      status: "In Progress",
      progress: 75,
      value: "$350,000",
      startDate: "Oct 15, 2024",
      estimatedCompletion: "Mar 15, 2025"
    },
    {
      id: 2,
      title: "Wilson Pool House",
      customer: "Mike Wilson",
      status: "Foundation",
      progress: 25,
      value: "$85,000", 
      startDate: "Nov 1, 2024",
      estimatedCompletion: "Jan 30, 2025"
    },
    {
      id: 3,
      title: "Garcia Renovation",
      customer: "Elena Garcia",
      status: "Planning",
      progress: 10,
      value: "$125,000",
      startDate: "Dec 1, 2024",
      estimatedCompletion: "May 15, 2025"
    }
  ];

  const customers = [
    {
      id: 1,
      name: "Sarah Thompson",
      email: "sarah@email.com",
      phone: "(555) 123-4567",
      projects: 2,
      totalSpent: "$425,000",
      status: "Active"
    },
    {
      id: 2,
      name: "Mike Wilson", 
      email: "mike@email.com",
      phone: "(555) 234-5678",
      projects: 1,
      totalSpent: "$85,000",
      status: "Active"
    },
    {
      id: 3,
      name: "Elena Garcia",
      email: "elena@email.com", 
      phone: "(555) 345-6789",
      projects: 1,
      totalSpent: "$125,000",
      status: "New"
    }
  ];

  const pendingBookings = [
    {
      id: 1,
      service: "Site Consultation",
      customer: "John Davis",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      status: "Pending"
    },
    {
      id: 2,
      service: "Design Review",
      customer: "Lisa Chen",
      date: "Dec 23, 2024", 
      time: "2:00 PM",
      status: "Confirmed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress": case "active": return "bg-primary text-primary-foreground";
      case "foundation": return "bg-construction text-construction-foreground";
      case "planning": case "new": return "bg-blue-500 text-white";
      case "confirmed": return "bg-green-500 text-white";
      case "pending": return "bg-yellow-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage projects, customers, and business operations.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
              <Button variant="luxury">
                <Plus className="w-5 h-5 mr-2" />
                New Project
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                        <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentProjects.slice(0, 3).map((project) => (
                    <div key={project.id} className="p-4 border border-border rounded-lg space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.customer}</p>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress: {project.progress}%</span>
                        <span className="text-primary font-medium">{project.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-construction" />
                    Attention Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Material Delivery Delay</h4>
                    <p className="text-sm text-yellow-700">Thompson project - Foundation materials delayed by 2 days</p>
                  </div>
                  <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Inspection Scheduled</h4>
                    <p className="text-sm text-blue-700">Wilson project - Building inspection on Dec 20th</p>
                  </div>
                  <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Milestone Completed</h4>
                    <p className="text-sm text-green-700">Garcia project - Planning phase completed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {recentProjects.map((project) => (
                <Card key={project.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-playfair text-xl font-bold text-foreground">{project.title}</h3>
                            <p className="text-muted-foreground">Customer: {project.customer}</p>
                          </div>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all" 
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Value:</span>
                          <div className="font-semibold text-primary">{project.value}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <div className="font-medium text-foreground">{project.startDate}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Est. Completion:</span>
                          <div className="font-medium text-foreground">{project.estimatedCompletion}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button variant="luxury" size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
              <Button variant="luxury">
                <Plus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customers.map((customer) => (
                <Card key={customer.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{customer.name}</h4>
                        <Badge className={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="text-muted-foreground">{customer.email}</div>
                      <div className="text-muted-foreground">{customer.phone}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Projects:</span>
                        <div className="font-medium text-foreground">{customer.projects}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Spent:</span>
                        <div className="font-medium text-primary">{customer.totalSpent}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingBookings.map((booking) => (
                <Card key={booking.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">{booking.service}</h4>
                        <p className="text-muted-foreground">Customer: {booking.customer}</p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {booking.date} at {booking.time}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Confirm</Button>
                      <Button variant="outline" size="sm">Reschedule</Button>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;