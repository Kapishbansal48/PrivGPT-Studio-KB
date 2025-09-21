"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import SplashScreen from "../splashScreen";
import { useState, useEffect } from "react";
import {
  BookOpen,
  MessageSquare,
  Upload,
  Mic,
  Settings,
  HelpCircle,
  Zap,
  Shield,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout";

export default function DocsPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Head>
        <title>Documentation | PrivGPT Studio - User Guide & API Reference</title>
        <meta
          name="description"
          content="Complete documentation for PrivGPT Studio. Learn how to use our AI chat platform, understand features, and integrate with our API."
        />
        <meta
          name="keywords"
          content="PrivGPT Studio documentation, AI chat guide, API reference, user manual, privacy AI docs"
        />
        <meta
          property="og:title"
          content="Documentation | PrivGPT Studio - User Guide & API Reference"
        />
        <meta
          property="og:description"
          content="Comprehensive documentation for PrivGPT Studio including user guides, API reference, and feature explanations."
        />
        <meta
          property="og:url"
          content="https://privgpt-studio.vercel.app/docs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://privgpt-studio.vercel.app/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="PrivGPT Studio Documentation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Documentation | PrivGPT Studio" />
        <meta
          name="twitter:description"
          content="Learn how to use PrivGPT Studio with our comprehensive documentation and guides."
        />
        <meta
          name="twitter:image"
          content="https://privgpt-studio.vercel.app/logo.png"
        />
        <link rel="canonical" href="https://privgpt-studio.vercel.app/docs" />
      </Head>

      <div className="min-h-screen bg-background">
        <Layout>
          {/* Hero */}
          <section className="py-20 px-4 text-center">
            <Badge variant="secondary" className="mb-4">
              📚 Documentation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              Everything you need to know about using{" "}
              <span className="font-semibold text-foreground">
                PrivGPT Studio
              </span>
              . From getting started to advanced features, find all the information here.
            </p>
          </section>

          {/* Quick Links */}
          <section className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Quick Start Guide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                    <p className="text-muted-foreground text-sm">
                      Set up your account and start chatting
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Chat Features</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn about multi-chat and model switching
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Settings</h3>
                    <p className="text-muted-foreground text-sm">
                      Configure your preferences and privacy
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HelpCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                    <p className="text-muted-foreground text-sm">
                      Common questions and troubleshooting
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Getting Started
              </h2>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-6 h-6 mr-2" />
                      1. Create Your Account
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Sign up for a free account to access PrivGPT Studio. Your data remains private and secure.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Click "Sign Up" and enter your email
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Verify your email address
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Set up your profile preferences
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="w-6 h-6 mr-2" />
                      2. Start Your First Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Begin chatting with AI models. Choose between cloud and local models based on your privacy needs.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Navigate to the Chat page
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Select your preferred AI model
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        Type your message and press Enter
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                    <p className="text-muted-foreground text-sm">
                      Your conversations are private. Choose local models for complete data control.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Chat</h3>
                    <p className="text-muted-foreground text-sm">
                      Manage multiple conversations simultaneously with cross-references.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">File Upload</h3>
                    <p className="text-muted-foreground text-sm">
                      Upload PDFs, images, and documents for AI analysis and summarization.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Voice Input</h3>
                    <p className="text-muted-foreground text-sm">
                      Speak your queries naturally. Voice-to-text conversion for hands-free interaction.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Model Switching</h3>
                    <p className="text-muted-foreground text-sm">
                      Switch between cloud and local AI models seamlessly without losing context.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Session Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Rename, export, and delete chat sessions. Keep your workspace organized.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                API Reference
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Chat API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Integrate PrivGPT Studio's AI capabilities into your applications.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <code className="text-sm">
                      POST /api/chat<br/>
                      Content-Type: application/json<br/>
                      <br/>
                      &#123;<br/>
                      &nbsp;&nbsp;"message": "Your message here",<br/>
                      &nbsp;&nbsp;"model": "gemini" | "ollama",<br/>
                      &nbsp;&nbsp;"session_id": "optional-session-id"<br/>
                      &#125;
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For detailed API documentation, visit our <Link href="/api-docs" className="text-primary hover:underline">API Docs</Link> page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is my data really private?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! When using local models, your data never leaves your device. Cloud models use encrypted connections and we don't store your conversations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I switch between AI models?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In the chat interface, click the model selector dropdown in the top-right corner. Choose between available cloud and local models.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I use PrivGPT Studio offline?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! Install Ollama locally and select local models for complete offline functionality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="py-16 px-4">
            <div className="container mx-auto text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find what you're looking for? Our community and support team are here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://discord.gg/J9z5T52rkZ">
                  <Button size="lg">
                    <Users className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button variant="outline" size="lg">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Try Live Chat
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </>
  );
}