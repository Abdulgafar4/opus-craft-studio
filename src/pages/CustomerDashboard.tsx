import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User,
  FileText,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Edit,
  Eye
} from "lucide-react";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const currentProjects = [
    {
      id: 1,
      title: "Luxury Home Construction",
      address: "123 Oakwood Drive",
      status: "In Progress",
      progress: 65,
      nextMilestone: "Interior Design Phase",
      estimatedCompletion: "March 15, 2024"
    },
    {
      id: 2,
      title: "Pool House Addition",
      address: "456 Maple Street",
      status: "Foundation",
      progress: 25,
      nextMilestone: "Framing Start",
      estimatedCompletion: "May 20, 2024"
    }
  ];

  const recentQuotes = [
    {
      id: 1,
      service: "Landscape Design",
      amount: "$35,000",
      status: "Pending Review",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      service: "Kitchen Renovation",
      amount: "$85,000",
      status: "Approved",
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      service: "Bathroom Remodel",
      amount: "$25,000",
      status: "In Review",
      date: "Dec 8, 2024"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      title: "Site Inspection",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      location: "123 Oakwood Drive"
    },
    {
      id: 2,
      title: "Design Consultation",
      date: "Dec 22, 2024", 
      time: "2:00 PM",
      location: "Office"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress": return "bg-primary text-primary-foreground";
      case "foundation": return "bg-construction text-construction-foreground";
      case "approved": return "bg-green-500 text-white";
      case "pending review": return "bg-yellow-500 text-white";
      case "in review": return "bg-blue-500 text-white";
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
                Customer Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, Sarah Johnson. Manage your projects and track progress.
              </p>
            </div>
            <Button variant="luxury">
              <Plus className="w-5 h-5 mr-2" />
              New Quote Request
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">2</div>
                  <div className="text-muted-foreground">Active Projects</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-construction rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-construction-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">$145K</div>
                  <div className="text-muted-foreground">Total Investment</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">45%</div>
                  <div className="text-muted-foreground">Avg Progress</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">3</div>
                  <div className="text-muted-foreground">Pending Quotes</div>
                </CardContent>
              </Card>
            </div>

            {/* Current Projects Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Current Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentProjects.map((project) => (
                    <div key={project.id} className="p-4 border border-border rounded-lg space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.address}</p>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">{appointment.title}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>📅 {appointment.date} at {appointment.time}</div>
                        <div>📍 {appointment.location}</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Schedule New Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {currentProjects.map((project) => (
                <Card key={project.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-playfair text-2xl font-bold text-foreground">{project.title}</h3>
                            <p className="text-muted-foreground">{project.address}</p>
                          </div>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Overall Progress</span>
                            <span className="text-foreground font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-3">
                            <div 
                              className="bg-primary h-3 rounded-full transition-all" 
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Next Milestone:</span>
                            <div className="font-medium text-foreground">{project.nextMilestone}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Est. Completion:</span>
                            <div className="font-medium text-foreground">{project.estimatedCompletion}</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button variant="luxury" size="lg" className="w-full">
                          <Eye className="w-5 h-5 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="lg" className="w-full">
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Visit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quotes Tab */}
          <TabsContent value="quotes" className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {recentQuotes.map((quote) => (
                <Card key={quote.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg text-foreground">{quote.service}</h4>
                        <p className="text-muted-foreground text-sm">Requested on {quote.date}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="font-playfair text-2xl font-bold text-primary">{quote.amount}</div>
                        <Badge className={getStatusColor(quote.status)}>
                          {quote.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Modify
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="bg-gradient-card border-border/50 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-6 space-y-4">
                    <h4 className="font-playfair text-xl font-bold text-foreground">{appointment.title}</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {appointment.date} at {appointment.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {appointment.location}
                      </div>
                    </div>
                    <div className="flex gap-2">
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

export default CustomerDashboard;