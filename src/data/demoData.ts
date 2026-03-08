export const DEMO_MODE_ENABLED = () => {
    return localStorage.getItem('mica_demo_mode') === 'true';
};

export const DEMO_CAMPAIGN = {
    // Campaign Details
    id: "demo-happiness-001",
    user_id: "demo-user",
    product_name: "The Art of Living Happiness Programme",
    product_description: "The Art of Living Happiness Programme is a 3-day experiential workshop that teaches practical tools to manage stress, calm the mind, and live with more energy and joy. Through a blend of yoga, powerful breathing techniques (including Sudarshan Kriya), guided meditation, and simple life wisdom, participants learn how to handle everyday challenges with greater ease and positivity. Key benefits include significant reduction in stress, increased daily energy levels, improved sleep, greater emotional resilience, and stronger relationships.",
    target_audience: "Working professionals, students, and homemakers experiencing daily stress, anxiety, or low energy, who are looking for practical, proven techniques to improve their mental well-being and overall quality of life.",
    launch_date: "2026-04-15",
    budget: 6000,
    location: "Global - Online & In-person centers",
    tone: "Warm & Inspirational",
    tone_custom_words: "",
    status: "plan_ready",
    recommended_channels: ["email", "whatsapp", "instagram"],
    recipient_count: 512,
    launched_at: "2026-04-15T09:00:00Z",
    campaign_start_date: "2026-04-15",
    campaign_end_date: "2026-05-15",

    // Tone Preview 
    tone_preview_content: {
        tone_summary: "Your campaign speaks with a warm, encouraging, and deeply uplifting voice. We emphasize the transformation from stress to joy, using empathetic language that acknowledges daily struggles while firmly offering a proven, accessible solution. The tone feels like a wise, compassionate friend inviting them to experience life differently.",
        sample_email: {
            subject: "Reclaim your joy. Reduce your stress. 🌿",
            opening_paragraph: "Hi there, We all know that feeling—the endless to-do lists, the racing mind at 2 AM, the feeling of being constantly 'on' but never truly energized. What if you could hit the pause button and actually breathe? The Art of Living Happiness Programme isn't just another workshop; it's an experiential journey to discover the peace that already exists within you. Through the powerful Sudarshan Kriya breathing technique, you can release deep-rooted stress and wake up feeling lighter, calmer, and ready for whatever life brings."
        },
        sample_social_post: {
            caption: "Tired of feeling tired? 🥱➡️✨\n\nStress doesn't have to be your default state.\n\nThe Art of Living Happiness Programme teaches you powerful, practical breathing techniques (like Sudarshan Kriya) to clear your mind, boost your energy, and literally breathe away anxiety.\n\n3 Days. A lifetime of tools.\n\nExperience the shift. Link in bio to find a program near you! 🧘‍♂️\n\n#HappinessProgramme #ArtOfLiving #SudarshanKriya #StressRelief #MentalWellness #Breathe",
            post_type: "carousel"
        },
        sample_whatsapp: {
            message: "Hello! 🌟 Quick check-in: On a scale of 1-10, how stressed are you feeling this week? If you're higher than a 5, we have something that can help. The Art of Living Happiness Programme teaches you a unique breathing technique (Sudarshan Kriya) that naturally dissolves stress and brings back your energy. Want to know more about how it works? Reply YES and I'll send you the details! 😊"
        },
        recommended_channels: ["email", "whatsapp", "instagram"],
        channel_reasoning: "Instagram effectively conveys the 'before and after' transformation visually. WhatsApp allows for personal check-ins and community building, which is crucial for a transformative workshop. Email provides the space necessary to explain the science and deep benefits of Sudarshan Kriya and share detailed testimonials."
    },

    // Marketing Plan
    marketing_plan: {
        campaign_name: "Breathe Joy: The Happiness Programme Launch",
        strategy_summary: "A comprehensive 4-week campaign designed to guide individuals from stress awareness to enrollment in the Happiness Programme. Week 1 focuses on highlighting the ubiquitous problem of stress and introducing breath as the missing link. Week 2 builds authority and trust by explaining the science behind Sudarshan Kriya and sharing profound testimonials. Week 3 creates urgency around upcoming workshop dates and early-bird registrations. Week 4 drives final enrollments through personal follow-ups and overcoming last-minute objections.",

        target_persona: {
            description: "Neha, 34, is a mid-level manager and mother. She constantly feels overwhelmed trying to balance career and family. She experiences poor sleep, frequent tension headaches, and feels she has a short fuse with her loved ones. She has tried meditation apps but finds her mind too busy to sit still.",
            pain_points: [
                "Constant low-level anxiety and stress",
                "Waking up feeling unrefreshed and fatigued",
                "Difficulty managing emotions; reacting rather than responding",
                "Unable to focus or 'switch off' from work"
            ],
            motivations: [
                "Desire to feel lighter and more joyful daily",
                "Seeking better relationships with family and colleagues",
                "Needs a practical, guided technique rather than self-led meditation",
                "Wants to improve physical health and sleep quality"
            ]
        },

        methodology: {
            name: "The AIDA Framework (Attention, Interest, Desire, Action)",
            reasoning: "For a transformative 3-day workshop, we first need to capture ATTENTION regarding their everyday stress. We build INTEREST by introducing a novel solution (Sudarshan Kriya). We create DESIRE through scientific proof and emotional testimonials, leading to the final ACTION of workshop registration."
        },

        key_messages: [
            "Your breath holds the secret to managing your mind.",
            "Stress is not a necessary part of success.",
            "Sudarshan Kriya: A research-backed technique to release deep-rooted fatigue.",
            "Invest 3 days to gain tools for a lifetime of joy."
        ],

        channel_plan: {
            email: {
                journey_type: "Educational & Storytelling",
                total_count: 5,
                rationale: "Email provides the long-form format needed to explain the deep benefits of the programme, the science of breath, and detailed success stories.",
                stages: [
                    { day_range: [1, 3], stage_name: "Awareness", purpose: "Highlight the true cost of everyday stress and introduce breath as the missing link" },
                    { day_range: [4, 8], stage_name: "Education", purpose: "Introduce Sudarshan Kriya and present scientific benefits and research" },
                    { day_range: [9, 14], stage_name: "Desire", purpose: "Deep dive testimonial — share a powerful transformation story" },
                    { day_range: [15, 22], stage_name: "Consideration", purpose: "Workshop details, FAQ, and overcoming objections" },
                    { day_range: [23, 28], stage_name: "Action", purpose: "Final reminder and direct registration link with urgency" }
                ]
            },
            whatsapp: {
                journey_type: "Personalized Nurture & Support",
                total_count: 8,
                rationale: "WhatsApp allows for immediate, personal connection, answering specific doubts, and sending quick, actionable tips to build trust.",
                audience_context: "Working professionals and homemakers aged 25-45 who respond better to personal, conversational outreach than formal campaigns.",
                stages: [
                    { day_range: [1, 2], stage_name: "Welcome", purpose: "Personal welcome and stress assessment to establish rapport" },
                    { day_range: [3, 5], stage_name: "Value Add", purpose: "Quick breathing tip delivery to build immediate trust" },
                    { day_range: [6, 10], stage_name: "Social Proof", purpose: "Short testimonial sharing to create emotional connection" },
                    { day_range: [11, 14], stage_name: "Invitation", purpose: "Invite to introductory session or full workshop" },
                    { day_range: [15, 18], stage_name: "Q&A", purpose: "Direct question and answer handling for objections" },
                    { day_range: [19, 22], stage_name: "Urgency", purpose: "Spots filling up — create time-bound motivation" },
                    { day_range: [23, 26], stage_name: "Reminder", purpose: "48-hour countdown reminder to drive action" },
                    { day_range: [27, 28], stage_name: "Final Push", purpose: "Last direct follow-up before registration closes" }
                ]
            },
            instagram: {
                journey_type: "Visual Inspiration & Social Proof",
                total_count: 10,
                rationale: "Instagram captures attention through highly relatable 'stressed vs mindful' visuals, bite-sized wisdom, and video testimonials.",
                content_mix: { reels: 3, carousels: 4, single_image: 3 },
                stages: [
                    { day_range: [1, 4], stage_name: "Problem Awareness", purpose: "Relatable reels highlighting daily stress struggles" },
                    { day_range: [5, 8], stage_name: "Education", purpose: "Infographics on stress vs relaxation and the science of breath" },
                    { day_range: [9, 14], stage_name: "Technique Teasers", purpose: "Short snippets of breathing techniques and practical wisdom" },
                    { day_range: [15, 20], stage_name: "Transformation", purpose: "High-energy 'before vs after' transformation posts and testimonials" },
                    { day_range: [21, 24], stage_name: "Social Proof", purpose: "Quotes, community moments, and participant stories" },
                    { day_range: [25, 28], stage_name: "Countdown", purpose: "Urgent countdown posts to workshop dates with final CTA" }
                ]
            }
        },

        budget_allocation: {
            breakdown: {
                email: { amount: 800, purpose: "Platform costs and basic template design" },
                whatsapp: { amount: 1200, purpose: "Business API costs for outreach" },
                instagram: { amount: 3000, purpose: "Targeted ad spend and organic content boosting" },
                video_ad: { amount: 1000, purpose: "Production of the main campaign explainer video" }
            },
            total: 6000,
            rationale: "Budget is optimized for maximum reach at minimal cost. Instagram receives the largest share for targeted reach, WhatsApp enables personal conversion, and email remains highly cost-effective for the existing contact list."
        },

        expected_outcomes: {
            primary_kpi: "100+ program registrations",
            secondary_kpis: [
                "20% Open Rate on Emails",
                "15% Click-through Rate on WhatsApp links",
                "50,000+ targeted reach on Instagram"
            ],
            success_criteria: "A minimum of 100 paid registrations across the available workshop dates, achieving an ROI of at least 3x the campaign budget."
        },

        executive_summary: "The 'Breathe Joy' campaign is a multi-channel strategy aimed at increasing enrollments for the Art of Living Happiness Programme. By leveraging relatable pain points around stress and sleep, we introduce Sudarshan Kriya as a practical, scientifically-backed solution. The campaign utilizes Instagram for broad reach and visual storytelling, Email for deep education and scientific validation, and WhatsApp for intimate, conversational conversion. With a 6,000 budget, the goal is 100+ new registrations.",
        key_metrics: { total_touchpoints: 23, email_count: 5, whatsapp_count: 8, social_post_count: 10, campaign_duration_days: 28, estimated_reach: "50,000+" },
        recommendations: [
            "Host a free 45-minute online 'Breath & Meditation' intro session mid-campaign",
            "Leverage video testimonials of past participants explaining their specific health/stress turnarounds",
            "Offer a 'bring a friend' discount via WhatsApp to encourage group registrations"
        ]
    },

    // Email Templates (5)
    email_templates: [
        {
            id: "demo-hp-email-1",
            template_order: 1,
            subject: "The hidden exhaustion you've been carrying 🎒",
            pre_header: "Why sleep isn't fixing your tiredness...",
            body: "<p>Hi {{first_name}},</p><p>Have you noticed that even after a full night's sleep, you sometimes wake up feeling exhausted?</p><p>That's because sleep rests the body, but it doesn't necessarily clear the deep-rooted stress accumulated in the mind.</p><p>When we're constantly juggling work, family, and a thousand thoughts, our nervous system stays in 'fight or flight' mode. We normalize this tension, until it becomes our baseline.</p><p><strong>But it doesn't have to be.</strong></p><p>The Art of Living Happiness Programme is a 3-day workshop designed to hit the reset button on your nervous system. Through a unique breathing technique called Sudarshan Kriya, you can release the stress you didn't even know you were holding.</p><p>Participants often report feeling physically lighter and mentally clearer from the very first session.</p><p><a href='{{cta_link}}' style='background-color:#F59E0B;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;'>Discover the Happiness Programme →</a></p><p>If you're tired of running on empty, it's time to learn how to actively recharge.</p><p>Warmly,<br/>The Art of Living Team</p>",
            cta_text: "Discover the Happiness Programme",
            scheduled_day: 1
        },
        {
            id: "demo-hp-email-2",
            template_order: 2,
            subject: "The science of your breath 🫁🔬",
            pre_header: "How Sudarshan Kriya changes your brain...",
            body: "<p>Hi {{first_name}},</p><p>We talk a lot about 'managing the mind', but anyone who has tried to forcibly calm down a stressed mind knows how impossible that is.</p><p>The secret isn't in the mind. It's in the breath.</p><p>Every emotion has a corresponding rhythm in the breath. When you're angry, your breath is short and fast. When you're relaxed, it's deep and slow. The incredible part? It works in reverse. By changing the rhythm of your breath, you can instantly change your emotional state.</p><p><strong>That is the power of Sudarshan Kriya (SKY).</strong></p><p>SKY is the core technique taught in the Happiness Programme. It is a specific rhythm of breathing that has been validated by over 100 independent scientific studies. Research shows it:</p><ul><li>Significantly reduces cortisol (the stress hormone)</li><li>Increases prolactin (the well-being hormone)</li><li>Relieves mild, moderate, and severe depression</li><li>Improves sleep quality and immune function</li></ul><p>You don't just 'feel better'. You are physiologically rewiring your system for joy.</p><p><a href='{{cta_link}}' style='background-color:#F59E0B;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;'>Read the Research & Find a Workshop →</a></p><p>It's not magic. It's science.</p><p>Warmly,<br/>The Art of Living Team</p>",
            cta_text: "Read the Research & Find a Workshop",
            scheduled_day: 5
        },
        {
            id: "demo-hp-email-3",
            template_order: 3,
            subject: "\"I didn't yell at my kids once this week\" ❤️",
            pre_header: "Read Neha's transformation story...",
            body: "<p>Hi {{first_name}},</p><p>Stress rarely stays contained at work. It follows us home. It snaps at our partners. It has little patience for our children.</p><p>Neha, a 34-year-old manager, was feeling this acutely. <em>\"I loved my family, but by 7 PM, I had zero energy for them. Every little thing irritated me. I felt incredibly guilty, but I was just so burnt out.\"</em></p><p>She enrolled in the Happiness Programme hoping for a quick fix for her headaches.</p><p><em>\"The physical relief was immediate. But the real shock came a week later. My toddler spilled juice all over my laptop bag. Normally, I would have lost it. Instead, I just took a breath, felt completely calm, and wiped it up. I didn't yell. My husband looked at me like I was an alien.\"</em></p><p>When you clear the stress from your system, your center of gravity returns. You stop reacting, and you start responding.</p><p>What could that kind of patience and clarity do for your relationships?</p><p><a href='{{cta_link}}' style='background-color:#F59E0B;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;'>Experience the Shift for Yourself →</a></p><p>Warmly,<br/>The Art of Living Team</p>",
            cta_text: "Experience the Shift for Yourself",
            scheduled_day: 12
        },
        {
            id: "demo-hp-email-4",
            template_order: 4,
            subject: "Your questions about the Happiness Programme, answered ✅",
            pre_header: "Everything you need to know before you join...",
            body: "<p>Hi {{first_name}},</p><p>We know that committing 3 days to a workshop is a big decision when you're already busy. Here are the top questions we get about the Happiness Programme:</p><p><strong>Q: I can't sit still for 5 minutes. Is this for me?</strong><br/>A: Absolutely! This isn't about forcing an overactive mind to sit silently. The breathing techniques do the work for you, naturally pulling the mind into a state of deep meditation without effort.</p><p><strong>Q: What exactly happens over the 3 days?</strong><br/>A: You'll learn Sudarshan Kriya (which you can practice at home in 20 mins), simple yoga stretches, guided meditations, and practical wisdom for handling difficult people and situations.</p><p><strong>Q: Do I have to become vegetarian or change my lifestyle?</strong><br/>A: No! The program gives you tools. You choose how to live your life. People from all walks of life, backgrounds, and diets benefit equally.</p><p><strong>Q: Will I actually keep doing it after the workshop?</strong><br/>A: The beauty of Sudarshan Kriya is that you instantly feel the benefits, which motivates you to keep doing it. Plus, you get access to free weekly review sessions globally to keep your practice strong.</p><p>Our next batch starts this Friday. Are you ready to invest 3 days for a lifetime of tools?</p><p><a href='{{cta_link}}' style='background-color:#F59E0B;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;'>View Upcoming Dates & Register →</a></p><p>Warmly,<br/>The Art of Living Team</p>",
            cta_text: "View Upcoming Dates & Register",
            scheduled_day: 20
        },
        {
            id: "demo-hp-email-5",
            template_order: 5,
            subject: "Last chance to join this weekend's workshop ⏳",
            pre_header: "We start tomorrow. Secure your spot.",
            body: "<p>Hi {{first_name}},</p><p>This is a quick reminder that the upcoming Happiness Programme begins tomorrow.</p><p>If you've been reading these emails, you already know the cost of carrying your stress. You know the research. You've heard the stories.</p><p>The only thing left is action.</p><p>By Sunday evening, you could be feeling more clear-headed, energetic, and peaceful than you have in years. You could have a practical, 20-minute daily tool to ensure you stay that way, no matter what challenges next week brings.</p><p>Don't wait for 'things to quiet down' at work. The best time to learn how to paddle is before the storm, not during it.</p><p><a href='{{cta_link}}' style='background-color:#EF4444;color:white;padding:14px 28px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:bold;font-size:16px;'>Register Now — Final Spots →</a></p><p>We can't wait to see you there.</p><p>Warmly,<br/>The Art of Living Team</p>",
            cta_text: "Register Now — Final Spots",
            scheduled_day: 27
        }
    ],

    // WhatsApp Messages (8)
    whatsapp_messages: [
        { id: "demo-hp-wa-1", message_order: 1, message_text: "Hello! 🌟 Quick check-in: On a scale of 1-10, how stressed are you feeling this week? If you're higher than a 5, you're not alone. Most professionals constantly run on 'fight or flight' mode. We teach a technique called Sudarshan Kriya that physically resets your nervous system. Want to see how it works? Reply YES! 😊", message_type: "intro", scheduled_day: 1 },
        { id: "demo-hp-wa-2", message_order: 2, message_text: "Here's a quick hack for you today 🧘‍♂️ Whenever you feel overwhelmed at your desk, try 'Straw Breathing'. Breathe in deeply through your nose. Pucker your lips like you have a straw, and exhale super slowly. Do it 3 times. Notice the shift? This is just 1% of the breathing tools we teach in the Happiness Programme. Details: [link]", message_type: "value", scheduled_day: 5 },
        { id: "demo-hp-wa-3", message_order: 3, message_text: "Did you know every emotion has a corresponding breath rhythm? Short/fast = anger. Deep/slow = calm. The Happiness Programme teaches you how to reverse-engineer your emotions using your breath. It's science, not magic. Read the research here: [link] 🫁🔬", message_type: "education", scheduled_day: 10 },
        { id: "demo-hp-wa-4", message_order: 4, message_text: "\"I used to wake up tired. Since learning Sudarshan Kriya, I need less sleep but have double the energy.\" - Rahul, IT Consultant. ⚡ Imagine having the energy to actually enjoy your evenings after work. That's what the 3-day Happiness Programme can do. Explore dates here: [link]", message_type: "social_proof", scheduled_day: 14 },
        { id: "demo-hp-wa-5", message_order: 5, message_text: "Update: The upcoming weekend Happiness Programme is already 70% full! 🎉 If you've been thinking about joining, now is the time to secure your spot. It's just 3 days to equip yourself with tools for a lifetime of calm. Register here → [link]", message_type: "urgency", scheduled_day: 15 },
        { id: "demo-hp-wa-6", message_order: 6, message_text: "Are you worried you won't be able to sit still and meditate? Don't worry! 🧘‍♀️ The Sudarshan Kriya breathing technique does the work for you. It naturally pulls an active mind into deep rest without effort. It's perfect for overthinkers! Secure your spot for this week: [link]", message_type: "objection_handling", scheduled_day: 20 },
        { id: "demo-hp-wa-7", message_order: 7, message_text: "Just 48 hours left until the Happiness Programme begins! ⏳ Don't push your mental well-being to 'next month' again. Invest these 3 days in yourself—your family, your career, and your future self will thank you. Final few spots remaining: [link]", message_type: "reminder", scheduled_day: 25 },
        { id: "demo-hp-wa-8", message_order: 8, message_text: "This is it — registrations close TONIGHT! 🚪 We start tomorrow. If you want to wake up next Monday feeling completely energized, clear-headed, and stress-free, join us. I've kept a spot open for you. Say yes to yourself here → [link] ✨", message_type: "close", scheduled_day: 28 }
    ],

    // Social Posts (10)
    social_posts: [
        { id: "demo-hp-post-1", post_order: 1, caption: "Is 'exhausted' your dominant personality trait? 🥱\n\nSleeping 8 hours doesn't fix a mind that's constantly racing.\n\nTo truly rest, you need to clear the deep-rooted stress in your nervous system. The Art of Living Happiness Programme teaches you Sudarshan Kriya—a powerful breathing technique that does exactly that.\n\nStop surviving. Start thriving. Link in bio. ✨\n\n#HappinessProgramme #ArtOfLiving #StressRelief #MentalFatigue #Breathwork", hashtags: "#HappinessProgramme #ArtOfLiving #StressRelief #MentalFatigue #Breathwork", scheduled_day: 2, image_suggestion: "Split image: Left side shows a person looking drained at a laptop with a coffee cup. Right side shows a person smiling brightly, looking refreshed outdoors. Vibrant yellow/orange accents.", image_url: "/demo-assets/post-1.png" },
        { id: "demo-hp-post-2", post_order: 2, caption: "If you can't control your mind, control your breath. 🫁\n\nYour breath and your emotions are directly linked. Change the rhythm of your breath, and you instantly change your state of mind.\n\nLearn the science of breath in the 3-day Happiness Programme.\n\nLink in bio. 🧘‍♂️\n\n#SudarshanKriya #Breathwork #MindBodyConnection #CalmMind", hashtags: "#SudarshanKriya #Breathwork #MindBodyConnection #CalmMind", scheduled_day: 3, image_suggestion: "Clean infographic showing a diagram of lungs connecting to a brain, with text 'Change your breath = Change your mind'. Blue and green calming tones.", image_url: "/demo-assets/post-2.png" },
        { id: "demo-hp-post-3", post_order: 3, caption: "POV: You finally learned how to let go of work stress at 5 PM. 😌💼➡️🏡\n\nThe ability to 'switch off' isn't a personality trait; it's a skill. And you can learn it. \n\nThe techniques taught in the Happiness Programme help you leave work at work, so you can actually be present for your life.\n\nJoin the next batch. Link in bio.\n\n#WorkLifeBalance #SwitchOff #BurnoutPrevention #PresentMoment", hashtags: "#WorkLifeBalance #SwitchOff #BurnoutPrevention #PresentMoment", scheduled_day: 7, image_suggestion: "Short video loop or image of someone happily closing a laptop and transitioning to playing with a dog or child, looking deeply relaxed.", image_url: "/demo-assets/post-3.png" },
        { id: "demo-hp-post-4", post_order: 4, caption: "Did you know? Sudarshan Kriya is backed by over 100 independent peer-reviewed studies. 🔬📈\n\nResearch shows it:\n✅ Reduces the stress hormone (Cortisol)\n✅ Increases the well-being hormone (Prolactin)\n✅ Improves deep sleep\n✅ Enhances immune function\n\nIt's not just \"feeling good.\" It's biological optimization.\n\nExperience the science of joy. Link in bio.\n\n#ScienceOfBreath #EvidenceBased #CortisolReduction #Biohacking #ArtOfLiving", hashtags: "#ScienceOfBreath #EvidenceBased #CortisolReduction #Biohacking #ArtOfLiving", scheduled_day: 8, image_suggestion: "Professional infographic with scientific icons (microscope, chart, brain) listing the proven benefits. Authoritative, clean design with white and deep blue.", image_url: "/demo-assets/post-4.png" },
        { id: "demo-hp-post-5", post_order: 5, caption: "For the overthinkers who \"can't meditate\"... this is for you. 🧠🌪️\n\nTrying to force an active mind to be quiet is like trying to iron a wrinkly shirt while wearing it.\n\nThe Happiness Programme uses the breath to naturally settle the mind effortlessly. You don't have to \"try\" to meditate. The Sudarshan Kriya pulls you into deep rest.\n\nGive us 3 days, and we'll prove it. Link in bio.\n\n#Overthinker #MeditationForOverthinkers #BusyMind #EffortlessMeditation", hashtags: "#Overthinker #MeditationForOverthinkers #BusyMind #EffortlessMeditation", scheduled_day: 10, image_suggestion: "Text-based post: 'I can't meditate, my mind is too busy.' -> crossed out. Replaced with 'You just need the right tool.' Minimalist design.", image_url: "/demo-assets/post-5.png" },
        { id: "demo-hp-post-6", post_order: 6, caption: "\"I have my patience back. I'm a better mother, a better wife, and a better boss because I'm not running on empty anymore.\" - Neha, 34 💬❤️\n\nWhen you clear the stress from your system, your true nature shines through. You naturally respond with patience instead of reacting with anger.\n\nTransform your relationships starting with yourself. \n\nLink in bio.\n\n#Testimonial #RealTalk #Motherhood #Leadership #EmotionalIntelligence", hashtags: "#Testimonial #RealTalk #Motherhood #Leadership #EmotionalIntelligence", scheduled_day: 14, image_suggestion: "Warm, authentic lifestyle image of a woman smiling, overlaid with the quote text. Soft, natural lighting.", image_url: "/demo-assets/post-6.png" },
        { id: "demo-hp-post-7", post_order: 7, caption: "Your schedule is full. Your mind is full. But is your heart full? ❤️‍🩹\n\nStop waiting for life to calm down. The calm has to start from within.\n\nTake 3 days to equip yourself with tools to navigate the chaos with a smile.\n\nEnrollments for the upcoming Happiness Programme are filling up fast. Secure your spot.\n\nLink in bio.\n\n#FindYourCalm #InnerPeace #PrioritizeYourself #SelfCare", hashtags: "#FindYourCalm #InnerPeace #PrioritizeYourself #SelfCare", scheduled_day: 16, image_suggestion: "Aesthetic image of someone looking peaceful amidst a blurred, busy city background. Emphasizing the contrast of inner calm vs outer chaos.", image_url: "/demo-assets/post-7.png" },
        { id: "demo-hp-post-8", post_order: 8, caption: "What you learn in 3 days: 🛠️\n\nDay 1: The connection between breath and emotions. Introduction to Pranayama.\nDay 2: Experiencing Sudarshan Kriya & profound relaxation.\nDay 3: Practical wisdom for daily living & establishing your home practice.\n\nWhat you get: A lifetime of tools to manage stress. ♾️\n\nAre you ready for the shift? Link in bio.\n\n#Workshop #CourseOutline #InvestInYourself #MentalWealth", hashtags: "#Workshop #CourseOutline #InvestInYourself #MentalWealth", scheduled_day: 18, image_suggestion: "Carousel post detailing Day 1, Day 2, Day 3 with bullet points and attractive icons. Clean, educational layout.", image_url: "/demo-assets/post-8.png" },
        { id: "demo-hp-post-9", post_order: 9, caption: "🚨 The upcoming Happiness Programme starts THIS WEEKEND!\n\nIf you've been putting off your mental well-being, this is your sign.\n\nJoin thousands of others who have traded their anxiety for deep joy and unshakable peace. \n\nOnly a few spots remaining. Link in bio to register now.\n\n#ThisWeekend #RegisterNow #HappinessProgramme #WeekendWorkshop", hashtags: "#ThisWeekend #RegisterNow #HappinessProgramme #WeekendWorkshop", scheduled_day: 24, image_suggestion: "High-energy graphic highlighting 'THIS WEEKEND'. Bright colors to grab attention, conveying excitement and urgency.", image_url: "/demo-assets/post-9.png" },
        { id: "demo-hp-post-10", post_order: 10, caption: "FINAL CALL. ⏰🚪\n\nRegistrations close tonight for the Happiness Programme.\n\nDon't let another month pass feeling overwhelmed and exhausted.\n\nGive yourself the gift of clarity, energy, and joy. \n\nWe start tomorrow.\n\nLink in bio. Last chance. ✨\n\n#FinalCall #RegistrationsClosing #ActNow #ArtOfLivingIndia", hashtags: "#FinalCall #RegistrationsClosing #ActNow #ArtOfLivingIndia", scheduled_day: 28, image_suggestion: "Bold, urgent visual with a clock/hourglass motif. 'Closing Tonight'. Dark background with stark white and warning-orange text.", image_url: "/demo-assets/post-10.png" }
    ],

    // Video
    video_url: "https://dynamic.heygen.ai/aws_pacific/avatar_tmp/1438b17eeed545b981fec8863f8d729d/v5848aa759798480c82ced7c4de123d30/820d52f6f343458792ddf22cfc4ed77e.mp4",
    video_status: "ready",
    video_script: "Hi there! I'm so excited to share the 'Breathe Joy' campaign strategy with you for the Happiness Programme. Over the next 4 weeks, we're going to take your audience on a journey from feeling overwhelmed to empowered, using email, WhatsApp, and Instagram. In Week 1, we build awareness by validating their daily stress. Week 2, we establish immense trust by explaining the hard science behind Sudarshan Kriya and sharing profound transformation stories. Week 3 creates urgency around upcoming workshop dates. And in Week 4, we drive the final conversions with highly personalized follow-ups. Your 512 contacts will receive 23 personalized touchpoints. Given the 6,000 budget, our goal is to secure over 100 paid registrations. The strategy is solid, the message is powerful. Let's make this happen!",

    // Execution Schedule 
    execution_schedule: [
        { id: "sched-1", channel: "email", asset_type: "email_template", asset_id: "demo-hp-email-1", scheduled_day: 1, scheduled_date: "2026-04-15", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-2", channel: "whatsapp", asset_type: "whatsapp_message", asset_id: "demo-hp-wa-1", scheduled_day: 1, scheduled_date: "2026-04-15", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-3", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-1", scheduled_day: 2, scheduled_date: "2026-04-16", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-4", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-2", scheduled_day: 3, scheduled_date: "2026-04-17", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-5", channel: "email", asset_type: "email_template", asset_id: "demo-hp-email-2", scheduled_day: 5, scheduled_date: "2026-04-19", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-6", channel: "whatsapp", asset_type: "whatsapp_message", asset_id: "demo-hp-wa-2", scheduled_day: 5, scheduled_date: "2026-04-19", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-7", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-3", scheduled_day: 7, scheduled_date: "2026-04-21", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-8", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-4", scheduled_day: 8, scheduled_date: "2026-04-22", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-9", channel: "email", asset_type: "email_template", asset_id: "demo-hp-email-3", scheduled_day: 12, scheduled_date: "2026-04-26", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-10", channel: "whatsapp", asset_type: "whatsapp_message", asset_id: "demo-hp-wa-3", scheduled_day: 10, scheduled_date: "2026-04-24", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-11", channel: "email", asset_type: "email_template", asset_id: "demo-hp-email-4", scheduled_day: 20, scheduled_date: "2026-05-04", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-12", channel: "whatsapp", asset_type: "whatsapp_message", asset_id: "demo-hp-wa-4", scheduled_day: 14, scheduled_date: "2026-04-28", status: "scheduled", recipients_total: 512, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-13", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-5", scheduled_day: 10, scheduled_date: "2026-04-24", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 },
        { id: "sched-14", channel: "instagram", asset_type: "social_post", asset_id: "demo-hp-post-6", scheduled_day: 14, scheduled_date: "2026-04-28", status: "scheduled", recipients_total: 1, recipients_sent: 0, recipients_failed: 0 }
    ],

    // Campaign Logs
    campaign_logs: [
        { channel: "email", action: "sent", recipient: "neha.manager@gmail.com", status_details: "Delivered", executed_at: "2026-04-15T09:00:01Z" },
        { channel: "email", action: "sent", recipient: "rahul.consulting@outlook.com", status_details: "Delivered", executed_at: "2026-04-15T09:00:02Z" },
        { channel: "email", action: "sent", recipient: "vikram.design@yahoo.com", status_details: "Delivered", executed_at: "2026-04-15T09:00:03Z" },
        { channel: "whatsapp", action: "sent", recipient: "+91-98765-43210", status_details: "Delivered", executed_at: "2026-04-15T09:01:01Z" },
        { channel: "whatsapp", action: "failed", recipient: "+91-11111-00000", status_details: "Number not on WhatsApp", executed_at: "2026-04-15T09:01:15Z" }
    ]
};

export const DEMO_TONE_VARIANTS: any = {
    "Professional": {
        tone_summary: "A credible, authority-driven approach that positions the Happiness Programme as a tool for cognitive optimization and emotional intelligence in leadership. We focus on the science, productivity, and evidence-based results. The language is direct and respectful.",
        sample_email: {
            subject: "Strategies for sustainable high performance",
            opening_paragraph: "Dear {{first_name}}, In today's competitive landscape, cognitive agility and emotional regulation are as crucial as technical skills. Yet, most professionals are operating with high cortisol and mental fatigue. The Happiness Programme offers a scientifically validated approach to stress regulation through Sudarshan Kriya."
        },
        sample_social_post: {
            caption: "Reviewing the data on workplace efficiency? 📊\n\nResearch indicates that Sudarshan Kriya significantly reduces cortisol and improves cognitive performance.\n\nThe Happiness Programme provides a structured framework to integrate this practice into an executive routine.\n\nOptimize your workday. Link in bio.\n\n#ProfessionalDevelopment #Leadership #Focus #Productivity",
            post_type: "single_image"
        },
        sample_whatsapp: {
            message: "Hello. We are hosting the 3-day Happiness Programme designed to enhance professional focus and reduce workplace stress via evidence-based breathing techniques. Would you be interested in reviewing the curriculum? Reply YES for the executive summary."
        },
        recommended_channels: ["email", "linkedin", "whatsapp"],
        channel_reasoning: "Professional tone warrants a shift towards LinkedIn and formal Email."
    },
    "Urgent": {
        tone_summary: "A high-energy, scarcity-driven approach emphasizing the physical and mental cost of constant stress. We use short sentences, time-sensitive triggers, and 'stop scrolling' language.",
        sample_email: {
            subject: "LAST CHANCE: Registration closes in 3 hours",
            opening_paragraph: "This is it. You have 3 hours left. Do not let another month go by exhausted and reactive. Over 100 people are already in for this weekend's Happiness Programme. Only a few spots remain. If you want to change your state of mind, you need to decide NOW."
        },
        sample_social_post: {
            caption: "STOP SCROLLING. 🛑\n\nThis is your final warning.\n\nDoors to the Happiness Programme close tonight.\n\nIf you miss this, you stay stressed for another month.\n\nDo you really want 30 more days of exhaustion?\n\nDidn't think so.\n\nLINK IN BIO. GO. 🏃\n\n#LastChance #NowOrNever #Urgent #WellnessGoal",
            post_type: "reel_script"
        },
        sample_whatsapp: {
            message: "Quick update: Only a few spots left for this weekend! 🚨 Enrollment for the Happiness Programme closes definitively tonight. If you were waiting for a sign to prioritize your mental health, this is it. Catch your breath. Grab your spot: [Link]"
        },
        recommended_channels: ["whatsapp", "instagram", "sms"],
        channel_reasoning: "Urgency works best on instant channels like WhatsApp and Instagram Stories."
    },
    "Casual": {
        tone_summary: "A relaxed, peer-to-peer vibe that feels like a chat with a best friend. We use emojis, lower-case styling, slang, and humor to make breathwork and meditation feel accessible and entirely normal.",
        sample_email: {
            subject: "stressed? same lol. let's fix it.",
            opening_paragraph: "hey friend! 👋 okay, be honest. how many times did you lose your patience today? no judgment, it happens. but seriously, if you're tired of running on fumes and caffeine, you gotta check out the Happiness Programme."
        },
        sample_social_post: {
            caption: "me trying to meditate: 🧘‍♀️\nmy brain: \"did i reply to that email? what if ducks had arms?\"\n\nwe get it. sitting still is hard.\n\nthat's why the Happiness Programme teaches Sudarshan Kriya. the breathing does the work for you. no weird chanting. just vibes and deep rest.\n\ncome hang! link in bio ✨\n\n#relatable #wellness #vibes #mindfulness",
            post_type: "meme"
        },
        sample_whatsapp: {
            message: "heyyy! 👋 doing the Happiness Programme this weekend. it's basically a 3-day deep reset for your brain using breathwork. wanna join? it's actually amazing and you sleep like a baby after. lmk if you want the deets? ✨"
        },
        recommended_channels: ["instagram", "whatsapp", "tiktok"],
        channel_reasoning: "Casual tone lives on social. Instagram/TikTok are primary."
    },
    "Warm & Inspirational": DEMO_CAMPAIGN.tone_preview_content, // Fallback to default
    "Custom": {
        tone_summary: "A tailored approach blending the core Art of Living message with specific requested nuances, ensuring a unique, resonant voice.",
        sample_email: {
            subject: "A gentle invitation to inner peace ✨",
            opening_paragraph: "Greetings. In the quiet moments of the morning, there is a space waiting for you. The Happiness Programme is an invitation to inhabit that space. To breathe. To return to your true nature."
        },
        sample_social_post: {
            caption: "Breathe in. 🌿\n\nBreathe out.\n\nYour peace is your highest priority.\n\nJoin us for 3 days of returning to yourself through Sudarshan Kriya.\n\nLink in bio.\n\n#Peace #ArtOfLiving #CustomTone #Serenity",
            post_type: "single_image"
        },
        sample_whatsapp: {
            message: "Hi there. 🌿 Just a gentle reminder that you deserve a moment of profound peace today. Our Happiness Programme starts soon. Would you like to join us on this inward journey? Reply YES to begin."
        },
        recommended_channels: ["email", "instagram"],
        channel_reasoning: "Custom tone implies a specific niche approach. Defaulting to high-visual and high-narrative channels."
    }
};
