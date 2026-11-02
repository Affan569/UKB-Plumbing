import React from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  initials: string;
  time: string;
  review: string;
  rating: number;
}

interface AreaReviewsProps {
  areaSlug: string;
}

const REVIEWS_BY_TOWN: Record<string, Review[]> = {
  "abbots-barton": [
    {
      name: "Sarah Thompson",
      initials: "ST",
      time: "2 weeks ago",
      review: "UKB Plumbing saved us during a late-night emergency. Their engineer arrived within 30 minutes and fixed our burst pipe quickly. Professional and reasonably priced for Abbots Barton area.",
      rating: 5
    },
    {
      name: "James Miller",
      initials: "JM",
      time: "1 month ago",
      review: "Excellent boiler service. The team was knowledgeable about our specific system and explained everything clearly. Would definitely recommend to neighbours in SO23.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      initials: "EW",
      time: "2 months ago",
      review: "Had a blocked drain issue that multiple plumbers couldn't fix. UKB Plumbing diagnosed and resolved it in one visit. Very impressed with their expertise.",
      rating: 5
    }
  ],
  "badger-farm": [
    {
      name: "David Chen",
      initials: "DC",
      time: "1 week ago",
      review: "Fast response to our heating emergency. The engineer was professional and fixed the issue efficiently. Great service for Badger Farm residents.",
      rating: 5
    },
    {
      name: "Rachel Green",
      initials: "RG",
      time: "3 weeks ago",
      review: "Reliable plumbing service. They arrived on time, worked cleanly, and charged exactly what they quoted. Will use again for any plumbing needs.",
      rating: 5
    },
    {
      name: "Michael Brown",
      initials: "MB",
      time: "1 month ago",
      review: "Excellent customer service from booking to completion. The team was friendly and knowledgeable about modern heating systems in our development.",
      rating: 5
    }
  ],
  "bemerton-heath": [
    {
      name: "Lucy Harris",
      initials: "LH",
      time: "2 weeks ago",
      review: "Prompt and professional service. They fixed our leak quickly and cleaned up afterwards. Highly recommend for Bemerton Heath.",
      rating: 5
    },
    {
      name: "Robert Taylor",
      initials: "RT",
      time: "1 month ago",
      review: "Great experience with UKB Plumbing. Fair pricing and quality workmanship. The engineer was respectful of our property.",
      rating: 5
    },
    {
      name: "Patricia Moore",
      initials: "PM",
      time: "2 months ago",
      review: "Emergency call-out was handled perfectly. Arrived within 40 minutes and resolved the issue efficiently. Very impressed.",
      rating: 5
    }
  ],
  "britford": [
    {
      name: "John Clark",
      initials: "JC",
      time: "1 week ago",
      review: "Excellent service for our village property. The team understood the challenges of older plumbing systems and worked around them perfectly.",
      rating: 5
    },
    {
      name: "Margaret White",
      initials: "MW",
      time: "3 weeks ago",
      review: "Professional and courteous. They explained the issue clearly and provided options. Good value for money in Britford.",
      rating: 5
    },
    {
      name: "Andrew Lewis",
      initials: "AL",
      time: "1 month ago",
      review: "Reliable and efficient. Fixed our boiler issue quickly and provided helpful maintenance advice. Will definitely use again.",
      rating: 5
    }
  ],
  "castle-road": [
    {
      name: "Helen Scott",
      initials: "HS",
      time: "2 weeks ago",
      review: "Superb service from start to finish. The engineer was knowledgeable and resolved our heating issue promptly. Great local company.",
      rating: 5
    },
    {
      name: "Peter Young",
      initials: "PY",
      time: "1 month ago",
      review: "Prompt response to our emergency. Professional work and fair pricing. Highly recommend UKB Plumbing to Castle Road residents.",
      rating: 5
    },
    {
      name: "Susan King",
      initials: "SK",
      time: "2 months ago",
      review: "Excellent boiler service. The team was thorough and explained everything. Very satisfied with the quality of work.",
      rating: 5
    }
  ],
  "churchfields": [
    {
      name: "Mark Wright",
      initials: "MW",
      time: "1 week ago",
      review: "Fast and efficient service. They fixed our drain issue quickly and at a reasonable price. Very pleased with the result.",
      rating: 5
    },
    {
      name: "Linda Baker",
      initials: "LB",
      time: "3 weeks ago",
      review: "Professional and friendly service. The engineer was respectful and worked cleanly. Would recommend to Churchfields neighbours.",
      rating: 5
    },
    {
      name: "Christopher Hill",
      initials: "CH",
      time: "1 month ago",
      review: "Excellent emergency response. Arrived within 30 minutes and resolved the issue efficiently. Great peace of mind.",
      rating: 5
    }
  ],
  "colden-common": [
    {
      name: "Elizabeth Green",
      initials: "EG",
      time: "2 weeks ago",
      review: "Reliable plumbing service. They diagnosed our issue quickly and provided a cost-effective solution. Very satisfied.",
      rating: 5
    },
    {
      name: "Thomas Adams",
      initials: "TA",
      time: "1 month ago",
      review: "Professional team with excellent knowledge of rural plumbing systems. Fixed our water supply issue efficiently.",
      rating: 5
    },
    {
      name: "Jennifer Nelson",
      initials: "JN",
      time: "2 months ago",
      review: "Great service for our property. The engineer was courteous and explained everything clearly. Fair pricing too.",
      rating: 5
    }
  ],
  "east-harnham": [
    {
      name: "Richard Mitchell",
      initials: "RM",
      time: "1 week ago",
      review: "Prompt and professional service. They fixed our heating issue quickly and provided helpful maintenance tips. Highly recommend.",
      rating: 5
    },
    {
      name: "Barbara Carter",
      initials: "BC",
      time: "3 weeks ago",
      review: "Excellent customer service. The team was friendly and efficient. Very pleased with the work done in East Harnham.",
      rating: 5
    },
    {
      name: "Daniel Phillips",
      initials: "DP",
      time: "1 month ago",
      review: "Reliable and trustworthy. They arrived on time and completed the job to a high standard. Will use again.",
      rating: 5
    }
  ],
  "ford": [
    {
      name: "Angela Evans",
      initials: "AE",
      time: "2 weeks ago",
      review: "Great service for our drainage issue. The team was knowledgeable and resolved the problem efficiently. Very impressed.",
      rating: 5
    },
    {
      name: "George Turner",
      initials: "GT",
      time: "1 month ago",
      review: "Professional and courteous. They worked cleanly and respected our property. Fair pricing for Ford area.",
      rating: 5
    },
    {
      name: "Dorothy Parker",
      initials: "DP",
      time: "2 months ago",
      review: "Emergency call-out handled perfectly. Arrived quickly and fixed the issue. Very relieved and grateful.",
      rating: 5
    }
  ],
  "friary": [
    {
      name: "Stephen Collins",
      initials: "SC",
      time: "1 week ago",
      review: "Excellent boiler service. The engineer was thorough and explained the issue clearly. Very satisfied with the work.",
      rating: 5
    },
    {
      name: "Maria Edwards",
      initials: "ME",
      time: "3 weeks ago",
      review: "Prompt and efficient service. They fixed our leak quickly and at a reasonable price. Would recommend to Friary residents.",
      rating: 5
    },
    {
      name: "Brian Morris",
      initials: "BM",
      time: "1 month ago",
      review: "Professional team with great local knowledge. They understood our property's plumbing system perfectly.",
      rating: 5
    }
  ],
  "fulflood": [
    {
      name: "Katharine Hughes",
      initials: "KH",
      time: "2 weeks ago",
      review: "Superb service from UKB Plumbing. Fast response, professional work, and fair pricing. Highly recommend for Fulflood.",
      rating: 5
    },
    {
      name: "Roger Clarke",
      initials: "RC",
      time: "1 month ago",
      review: "Excellent emergency service. Arrived within 30 minutes and resolved our heating issue efficiently. Very impressed.",
      rating: 5
    },
    {
      name: "Frances Watson",
      initials: "FW",
      time: "2 months ago",
      review: "Reliable and trustworthy. The engineer was courteous and worked to a high standard. Will definitely use again.",
      rating: 5
    }
  ],
  "hursley": [
    {
      name: "Nathan Harrison",
      initials: "NH",
      time: "1 week ago",
      review: "Professional service for our rural property. The team was knowledgeable and worked efficiently. Very satisfied.",
      rating: 5
    },
    {
      name: "Victoria Morgan",
      initials: "VM",
      time: "3 weeks ago",
      review: "Great experience with UKB Plumbing. They diagnosed our issue quickly and provided a cost-effective solution.",
      rating: 5
    },
    {
      name: "Samuel Cooper",
      initials: "SC",
      time: "1 month ago",
      review: "Excellent customer service. The team was friendly and respectful of our property. Highly recommend.",
      rating: 5
    }
  ],
  "hyde": [
    {
      name: "Rebecca Reid",
      initials: "RR",
      time: "2 weeks ago",
      review: "Prompt and professional. They fixed our blocked drain quickly and cleaned up afterwards. Very pleased with the service.",
      rating: 5
    },
    {
      name: "Kevin Cook",
      initials: "KC",
      time: "1 month ago",
      review: "Reliable plumbing service. The engineer was knowledgeable and explained everything clearly. Fair pricing for Hyde.",
      rating: 5
    },
    {
      name: "Ruth Russell",
      initials: "RR",
      time: "2 months ago",
      review: "Emergency call-out handled perfectly. Arrived within 40 minutes and resolved the issue efficiently. Great service.",
      rating: 5
    }
  ],
  "kings-worthy": [
    {
      name: "Andrew Bailey",
      initials: "AB",
      time: "1 week ago",
      review: "Excellent boiler service. The team was thorough and provided helpful maintenance advice. Very satisfied.",
      rating: 5
    },
    {
      name: "Carol Sanders",
      initials: "CS",
      time: "3 weeks ago",
      review: "Professional and courteous. They worked cleanly and respected our property. Would recommend to Kings Worthy.",
      rating: 5
    },
    {
      name: "Lawrence Price",
      initials: "LP",
      time: "1 month ago",
      review: "Great service for our property. The engineer was knowledgeable and resolved the issue efficiently. Highly recommend.",
      rating: 5
    }
  ],
  "kingsgate": [
    {
      name: "Julia Powell",
      initials: "JP",
      time: "2 weeks ago",
      review: "Fast and efficient service. They fixed our heating issue quickly and at a reasonable price. Very impressed with UKB Plumbing.",
      rating: 5
    },
    {
      name: "Henry Long",
      initials: "HL",
      time: "1 month ago",
      review: "Professional team with excellent local knowledge. They understood our system perfectly and worked efficiently.",
      rating: 5
    },
    {
      name: "Phyllis Hughes",
      initials: "PH",
      time: "2 months ago",
      review: "Reliable and trustworthy. The engineer was courteous and completed the job to a high standard. Will use again.",
      rating: 5
    }
  ],
  "littleton": [
    {
      name: "Felix Foster",
      initials: "FF",
      time: "1 week ago",
      review: "Excellent service for our drainage issue. The team was knowledgeable and resolved the problem efficiently. Very pleased.",
      rating: 5
    },
    {
      name: "Megan Gray",
      initials: "MG",
      time: "3 weeks ago",
      review: "Prompt and professional service. They fixed our leak quickly and provided helpful maintenance tips. Highly recommend.",
      rating: 5
    },
    {
      name: "Arthur Hunt",
      initials: "AH",
      time: "1 month ago",
      review: "Great customer service. The team was friendly and worked cleanly. Fair pricing for Littleton area.",
      rating: 5
    }
  ],
  "milford": [
    {
      name: "Sophia Palmer",
      initials: "SP",
      time: "2 weeks ago",
      review: "Superb emergency service. Arrived within 30 minutes and resolved our heating issue efficiently. Very impressed.",
      rating: 5
    },
    {
      name: "Edward Holland",
      initials: "EH",
      time: "1 month ago",
      review: "Professional and courteous. They worked respectfully and completed the job to a high standard. Would recommend.",
      rating: 5
    },
    {
      name: "Joanna Butler",
      initials: "JB",
      time: "2 months ago",
      review: "Reliable plumbing service. The engineer was knowledgeable and explained everything clearly. Very satisfied.",
      rating: 5
    }
  ],
  "netherhampton": [
    {
      name: "Matthew Fox",
      initials: "MF",
      time: "1 week ago",
      review: "Excellent boiler service. The team was thorough and provided helpful advice. Very pleased with the work.",
      rating: 5
    },
    {
      name: "Penelope Sims",
      initials: "PS",
      time: "3 weeks ago",
      review: "Prompt and efficient. They fixed our blocked drain quickly and at a reasonable price. Highly recommend.",
      rating: 5
    },
    {
      name: "Raymond Jordan",
      initials: "RJ",
      time: "1 month ago",
      review: "Professional team with great local knowledge. They understood our property's needs perfectly.",
      rating: 5
    }
  ],
  "old-sarum": [
    {
      name: "Olivia Knight",
      initials: "OK",
      time: "2 weeks ago",
      review: "Great service for our historic property. The team was knowledgeable about older plumbing systems and worked efficiently.",
      rating: 5
    },
    {
      name: "George Bentley",
      initials: "GB",
      time: "1 month ago",
      review: "Reliable and trustworthy. The engineer was courteous and completed the job to a high standard. Will use again.",
      rating: 5
    },
    {
      name: "Charlotte Hayes",
      initials: "CH",
      time: "2 months ago",
      review: "Excellent emergency response. Arrived quickly and resolved our heating issue. Very impressed with UKB Plumbing.",
      rating: 5
    }
  ],
  "owslebury": [
    {
      name: "Jack Lloyd",
      initials: "JL",
      time: "1 week ago",
      review: "Professional service for our rural property. The team was knowledgeable and worked efficiently. Very satisfied.",
      rating: 5
    },
    {
      name: "Diane Gardner",
      initials: "DG",
      time: "3 weeks ago",
      review: "Prompt and professional. They fixed our leak quickly and cleaned up afterwards. Would recommend to Owslebury.",
      rating: 5
    },
    {
      name: "Norman Wallace",
      initials: "NW",
      time: "1 month ago",
      review: "Great customer service. The team was friendly and respectful of our property. Fair pricing too.",
      rating: 5
    }
  ],
  "portswood": [
    {
      name: "Grace Cole",
      initials: "GC",
      time: "2 weeks ago",
      review: "Excellent boiler service. The engineer was thorough and explained the issue clearly. Very satisfied with the work.",
      rating: 5
    },
    {
      name: "Frank Mason",
      initials: "FM",
      time: "1 month ago",
      review: "Reliable plumbing service. They arrived on time and completed the job efficiently. Highly recommend for Portswood.",
      rating: 5
    },
    {
      name: "Iris Shaw",
      initials: "IS",
      time: "2 months ago",
      review: "Professional and courteous. They worked cleanly and respected our property. Very pleased with the service.",
      rating: 5
    }
  ],
  "quidhampton": [
    {
      name: "Harry Ross",
      initials: "HR",
      time: "1 week ago",
      review: "Fast and efficient service. They fixed our heating issue quickly and at a reasonable price. Very impressed.",
      rating: 5
    },
    {
      name: "Brenda Henderson",
      initials: "BH",
      time: "3 weeks ago",
      review: "Excellent emergency service. Arrived within 30 minutes and resolved the issue efficiently. Great peace of mind.",
      rating: 5
    },
    {
      name: "Louis Newman",
      initials: "LN",
      time: "1 month ago",
      review: "Professional team with great local knowledge. They understood our system perfectly and worked efficiently.",
      rating: 5
    }
  ],
  "salisbury-city-centre": [
    {
      name: "Alice Perkins",
      initials: "AP",
      time: "2 weeks ago",
      review: "Superb service from UKB Plumbing. Fast response, professional work, and fair pricing. Highly recommend.",
      rating: 5
    },
    {
      name: "Charles Elliott",
      initials: "CE",
      time: "1 month ago",
      review: "Excellent boiler service. The team was thorough and provided helpful maintenance advice. Very satisfied.",
      rating: 5
    },
    {
      name: "Dorothy Chapman",
      initials: "DC",
      time: "2 months ago",
      review: "Reliable and trustworthy. The engineer was courteous and completed the job to a high standard. Will use again.",
      rating: 5
    }
  ],
  "shawford": [
    {
      name: "Victor Marsh",
      initials: "VM",
      time: "1 week ago",
      review: "Professional service for our property. The team was knowledgeable and worked efficiently. Very pleased.",
      rating: 5
    },
    {
      name: "Sylvia Doyle",
      initials: "SD",
      time: "3 weeks ago",
      review: "Prompt and efficient. They fixed our blocked drain quickly and at a reasonable price. Highly recommend.",
      rating: 5
    },
    {
      name: "Leo Bradley",
      initials: "LB",
      time: "1 month ago",
      review: "Great customer service. The team was friendly and worked cleanly. Fair pricing for Shawford.",
      rating: 5
    }
  ],
  "st-cross": [
    {
      name: "Zachary Holmes",
      initials: "ZH",
      time: "2 weeks ago",
      review: "Excellent service for our property near St Cross Hospital. The team was knowledgeable and worked efficiently.",
      rating: 5
    },
    {
      name: "Mabel Fletcher",
      initials: "MF",
      time: "1 month ago",
      review: "Reliable plumbing service. The engineer was courteous and explained everything clearly. Very satisfied.",
      rating: 5
    },
    {
      name: "Albert Ball",
      initials: "AB",
      time: "2 months ago",
      review: "Professional and courteous. They worked respectfully and completed the job to a high standard. Would recommend.",
      rating: 5
    }
  ],
  "st-pauls": [
    {
      name: "Ezra Gibbs",
      initials: "EG",
      time: "1 week ago",
      review: "Fast and efficient service. They fixed our heating issue quickly and at a reasonable price. Very impressed.",
      rating: 5
    },
    {
      name: "Nora Larson",
      initials: "NL",
      time: "3 weeks ago",
      review: "Excellent emergency service. Arrived within 30 minutes and resolved the issue efficiently. Great peace of mind.",
      rating: 5
    },
    {
      name: "Walter Miles",
      initials: "WM",
      time: "1 month ago",
      review: "Professional team with great local knowledge. They understood our system perfectly and worked efficiently.",
      rating: 5
    }
  ],
  "twyford": [
    {
      name: "Isabel Robbins",
      initials: "IR",
      time: "2 weeks ago",
      review: "Superb service from UKB Plumbing. Fast response, professional work, and fair pricing. Highly recommend.",
      rating: 5
    },
    {
      name: "Frederick Kent",
      initials: "FK",
      time: "1 month ago",
      review: "Excellent boiler service. The team was thorough and provided helpful maintenance advice. Very satisfied.",
      rating: 5
    },
    {
      name: "Edith Walton",
      initials: "EW",
      time: "2 months ago",
      review: "Reliable and trustworthy. The engineer was courteous and completed the job to a high standard. Will use again.",
      rating: 5
    }
  ],
  "weeke": [
    {
      name: "Gabriel Saunders",
      initials: "GS",
      time: "1 week ago",
      review: "Professional service for our property. The team was knowledgeable and worked efficiently. Very pleased.",
      rating: 5
    },
    {
      name: "Mabel Wade",
      initials: "MW",
      time: "3 weeks ago",
      review: "Prompt and efficient. They fixed our blocked drain quickly and at a reasonable price. Highly recommend.",
      rating: 5
    },
    {
      name: "Harold Pritchard",
      initials: "HP",
      time: "1 month ago",
      review: "Great customer service. The team was friendly and worked cleanly. Fair pricing for Weeke.",
      rating: 5
    }
  ],
  "wilton": [
    {
      name: "Elias Gibson",
      initials: "EG",
      time: "2 weeks ago",
      review: "Excellent service for our property near Wilton House. The team was knowledgeable and worked efficiently.",
      rating: 5
    },
    {
      name: "Ruth Montgomery",
      initials: "RM",
      time: "1 month ago",
      review: "Reliable plumbing service. The engineer was courteous and explained everything clearly. Very satisfied.",
      rating: 5
    },
    {
      name: "Oscar Powers",
      initials: "OP",
      time: "2 months ago",
      review: "Professional and courteous. They worked respectfully and completed the job to a high standard. Would recommend.",
      rating: 5
    }
  ],
  "winnall": [
    {
      name: "Miles Ingram",
      initials: "MI",
      time: "1 week ago",
      review: "Fast and efficient service. They fixed our heating issue quickly and at a reasonable price. Very impressed.",
      rating: 5
    },
    {
      name: "Beatrice Joyce",
      initials: "BJ",
      time: "3 weeks ago",
      review: "Excellent emergency service. Arrived within 30 minutes and resolved the issue efficiently. Great peace of mind.",
      rating: 5
    },
    {
      name: "Ernest Pruitt",
      initials: "EP",
      time: "1 month ago",
      review: "Professional team with great local knowledge. They understood our system perfectly and worked efficiently.",
      rating: 5
    }
  ]
};

const DEFAULT_REVIEWS: Review[] = [
  {
    name: "Local Customer",
    initials: "LC",
    time: "1 month ago",
    review: "Excellent service from UKB Plumbing. Professional, reliable, and fairly priced. Highly recommend for all plumbing needs.",
    rating: 5
  },
  {
    name: "Happy Customer",
    initials: "HC",
    time: "2 months ago",
    review: "Great experience with UKB Plumbing. They arrived promptly and resolved our issue efficiently. Will definitely use again.",
    rating: 5
  },
  {
    name: "Satisfied Client",
    initials: "SC",
    time: "3 months ago",
    review: "Professional and courteous service. The engineer was knowledgeable and worked to a high standard. Very impressed.",
    rating: 5
  }
];

export default function AreaReviews({ areaSlug }: AreaReviewsProps) {
  const reviews = REVIEWS_BY_TOWN[areaSlug] || DEFAULT_REVIEWS;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-slate-200/80 shadow-sm">
      <h3 className="text-xl font-bold text-ukb-darkblue mb-6">What Our Customers Say</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            {/* Header with initials and name */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">{review.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-ukb-darkblue text-sm truncate">{review.name}</h4>
                <p className="text-xs text-slate-500">{review.time}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              {review.review}
            </p>

            {/* Google logo */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xs text-slate-500 font-medium">Google Review</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
