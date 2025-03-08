import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const categories = [
    { name: "Pro Golf", count: 12 },
    { name: "Instruction", count: 24 },
    { name: "Equipment", count: 18 },
    { name: "Course Reviews", count: 15 },
    { name: "Training", count: 10 },
  ];

  const featuredPosts = [
    {
      title: "How Scottie Scheffler Revolutionized the Modern Golf Swing",
      excerpt: "An in-depth analysis of world #1 Scottie Scheffler's unique swing mechanics and how they've changed the game.",
      category: "Pro Golf",
      author: "James Wilson",
      date: "Mar 7, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "how-scottie-scheffler-revolutionized-modern-golf-swing",
      featured: true,
      content: `
        The golf world has been captivated by Scottie Scheffler's meteoric rise to world #1, and for good reason. Beyond his impressive tournament victories, Scheffler has introduced a swing approach that's changing how coaches and players think about the modern golf swing.

        What makes Scheffler's swing so revolutionary is his combination of power, control, and repeatability. Unlike many of his contemporaries who focus on maximum distance through aggressive rotation, Scheffler has perfected what analysts call a "matchup" swing—where the path and face are consistently matched through impact, resulting in exceptional accuracy even under pressure.

        The most distinctive element of his technique is his lower body action. While many modern players slide their hips toward the target, Scheffler maintains incredible stability in his lower half. His coach Randy Smith has emphasized that Scheffler's power comes from ground force reaction rather than lateral movement, creating a more consistent strike.

        Another standout characteristic is Scheffler's remarkably neutral clubface throughout the swing. In an era where many players manipulate the face to create specific shot shapes, Scheffler keeps the face aligned with his swing path to an almost mechanical degree of precision. This neutrality gives him the rare ability to hit every shot shape on demand without changing his fundamental swing.

        Perhaps most impressive is Scheffler's transition sequence. His downswing initiation features a subtle move that coaches now refer to as the "Scheffler pause"—a millisecond delay at the top that allows perfect sequencing from the ground up. This timing element has become a teaching point for instructors working with players at all levels.

        As we continue watching Scheffler dominate the professional tours, his influence on instruction will only grow. His swing represents a return to fundamentals but with modern athleticism—a combination that's proving to be the new blueprint for success at golf's highest levels.
      `
    },
    {
      title: "Top 5 Golf Training Aids That Actually Work, According to Tour Pros",
      excerpt: "PGA Tour players reveal their favorite training devices that have made a real difference in their games.",
      category: "Equipment",
      author: "Mike Johnson",
      date: "Mar 5, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "top-5-golf-training-aids-according-to-tour-pros",
      content: `
        The market is flooded with golf training aids promising to fix your slice, add distance, and perfect your putting stroke—but which ones actually deliver results? I spoke with 15 PGA Tour professionals to discover the training devices they swear by in their own practice routines.

        The overwhelming favorite among tour players is the Alignment Stick Pack. These simple fiberglass rods might seem basic, but pros use them in countless ways. Justin Thomas keeps them in his bag even during tournament weeks, using them to check alignment, swing plane, and even putting stroke path. "They're the most versatile training aid ever created," Thomas explained. "I haven't found anything else that helps with so many different aspects of the game."

        Coming in second is the PuttOut Pressure Trainer. This curved putting device requires perfect speed and line, making practice more challenging and effective. Collin Morikawa credits it with dramatically improving his distance control on long putts. "It's the perfect feedback tool," Morikawa said. "If you can consistently succeed with the Pressure Trainer, real putts feel much easier."

        Third on the list is the Orange Whip Trainer, which develops rhythm, balance, and sequencing in the golf swing. Despite its simplicity, players like Jordan Spieth incorporate it into their pre-round warmup routine. "It gets my tempo dialed in quickly," Spieth noted. "When my timing is off, 10 minutes with the Orange Whip usually fixes it."

        Fourth place belongs to the Lag Shot training clubs, particularly the 7-iron model. These flexible-shafted clubs promote proper sequencing and loading. Tony Finau, one of the longest hitters on tour, uses it regularly. "It immediately tells you if you're casting or using your body correctly," Finau explained. "It's impossible to hit good shots with it unless your sequence is right."

        Rounding out the top five is the BodiTrak portable pressure mat. This high-tech option measures weight distribution throughout the swing, providing data on how efficiently players use ground forces. Rory McIlroy became a convert after seeing how it highlighted inefficiencies in his transition. "It showed me I was losing power by shifting weight incorrectly," McIlroy said. "Making that adjustment added 15 yards to my driver overnight."

        What's notable about these pro-approved training aids is their focus on fundamentals rather than quick fixes. They provide feedback on the aspects of the swing that truly matter: alignment, sequence, pressure, tempo, and ground interaction.
      `
    },
    {
      title: "Augusta National's Secret Redesign: Changes You'll See at the 2025 Masters",
      excerpt: "Inside information on the significant but subtle changes made to Augusta National ahead of next year's tournament.",
      category: "Course Reviews",
      author: "Sarah Thompson",
      date: "Mar 3, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "augusta-nationals-secret-redesign-2025-masters",
      content: `
        Augusta National Golf Club has long been known for its continual evolution, with subtle changes made almost every year to challenge the world's best players. However, sources close to the club reveal that the modifications made for the 2025 Masters Tournament represent one of the most significant redesigns in decades.

        The most dramatic change comes at the iconic par-5 13th hole, "Azalea." After years of discussion about the hole becoming too short for modern players, the tee has been moved back and left by approximately 40 yards. This restoration creates the shot Bobby Jones originally intended—a genuine risk-reward decision about challenging the corner of the dogleg. The change forces players to hit a longer club off the tee and approach the green with a mid-iron rather than a short iron or wedge.

        Another significant modification appears at the par-4 5th hole, where the green has been completely rebuilt. The new putting surface features more pronounced contours and a challenging back-right pin position that brings a previously unseen collection area into play. This change effectively creates a new strategic element, as players must decide whether to attack certain pins or play conservatively to the center.

        The par-4 11th hole, already one of the most difficult on the course, has received a subtle but impactful change with the addition of three strategically placed pine trees along the right side of the fairway. These trees narrow the landing area and block the approach for drives that favor the safer right side, forcing players to either challenge the water on the left or hit a more difficult approach shot around the new trees.

        Perhaps the most interesting change is at the par-3 12th hole, where the green has been subtly reshaped to create a more pronounced tier on the right portion. This modification creates a new possible pin position that brings Rae's Creek more into play for any shot that's even slightly misjudged.

        Finally, the par-4 18th hole features a rebuilt bunker complex on the left side of the fairway. The bunkers have been deepened and reshaped to more severely punish drives that find them, making the finishing hole an even sterner test under Sunday pressure.

        Augusta National chairman Fred Ridley declined to comment specifically on the changes, maintaining the club's traditional privacy about course modifications. However, he noted that "the course continually evolves to test the complete player and reflect advances in the game."

        When the world's best players arrive in April 2025, they'll find an Augusta National that remains visually similar to what we've seen for years, but with strategic challenges that will require significant adjustment to previously successful game plans.
      `
    },
    {
      title: "The Perfect Practice Routine: How Tour Pros Maximize Their Limited Time",
      excerpt: "Learn how professional golfers structure their practice sessions for maximum improvement in minimal time.",
      category: "Pro Advice",
      author: "David Williams",
      date: "Feb 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "perfect-practice-routine-tour-pros-maximize-time",
      content: `
        The difference between amateur and professional golfers isn't just skill—it's how they practice. While amateurs often hit ball after ball without a clear purpose, tour professionals maximize every minute of their practice sessions with structured routines designed for efficient improvement.

        The key element in professional practice routines is purposeful variety. Viktor Hovland, known for his methodical approach to improvement, never hits more than three consecutive shots with the same club during range sessions. "Constantly switching clubs and targets makes practice more like real golf," Hovland explains. "Each shot requires a fresh setup and commitment, just like on the course."

        Another critical component is performance measurement. Justin Thomas tracks specific metrics for each practice session, allowing him to identify trends and improvements. "I don't judge practice by how I feel—I judge it by measurable results," Thomas says. "I track dispersion patterns with my irons and driving accuracy with specific targets. The numbers don't lie about whether I'm improving."

        Integration of skills is also fundamental to professional practice. Rather than isolating technical work from on-course play, Nelly Korda creates practice games that combine technical focus with scoring pressure. One of her favorites is the "Par 18" game, where she hits approach shots from various distances to different targets, then has to get up-and-down from wherever the approach finishes. This game simultaneously develops technical skills, decision-making, and performance under pressure.

        Time management sets professionals apart as well. Collin Morikawa dedicates specific time blocks to different aspects of his game, with a strict schedule that prevents overworking any single area. "Monday is for technical work, Tuesday for shots I'll need that week, Wednesday for competitive practice games," Morikawa shares. "This prevents me from getting lost in technical details when I should be preparing to compete."

        Perhaps most importantly, professionals incorporate feedback loops into their practice. Xander Schauffele records his practice sessions weekly, then reviews the footage with his coach to ensure his physical practice matches his mental intentions. "The camera doesn't lie," Schauffele notes. "Often what I think I'm doing and what I'm actually doing are different. Video feedback keeps me honest."

        For amateurs looking to practice more effectively, the professional approach can be simplified into a few principles: establish clear goals for each session, create measurable challenges, integrate multiple skills into each practice session, limit technical thoughts during gameplay, and regularly assess progress with objective measures.

        By adopting even some elements of the professional practice routine, recreational golfers can see dramatic improvement without necessarily increasing practice time.
      `
    },
    {
      title: "The Rise of Carbon Fiber: How Modern Materials Are Changing Golf Club Performance",
      excerpt: "An examination of how advanced carbon composite materials are revolutionizing driver, iron, and putter design.",
      category: "Equipment",
      author: "Robert Chen",
      date: "Feb 25, 2025",
      image: "/placeholder.svg?height=400&width=600",
      slug: "rise-of-carbon-fiber-changing-golf-club-performance",
      content: `
        The golf equipment industry has undergone a materials revolution, with carbon fiber composites rapidly replacing traditional metals in almost every club category. What began as an experiment in driver crowns has expanded into a fundamental shift in how golf clubs are designed, manufactured, and optimized for performance.

        Carbon fiber's primary advantage is its exceptional strength-to-weight ratio. A carbon composite component can be up to 60% lighter than its titanium or steel equivalent while maintaining structural integrity. This weight saving creates a cascade of performance benefits that manufacturers are aggressively exploiting.

        In drivers, we've moved beyond simple carbon crowns to full carbon body constructions. TaylorMade's Stealth series pioneered the carbon face, previously thought impossible due to durability concerns. Their proprietary layering process creates a face that's not only lightweight but actually outperforms titanium in energy transfer. Testing shows a 1.5-2 mph ball speed increase simply from the material change.

        The weight savings from carbon construction allows engineers to place mass exactly where it benefits performance most. Callaway's AI-designed composite patterns vary thickness in precise locations to optimize both forgiveness and ball speed across the entire face. Their latest drivers feature over 30 different carbon layers, each serving a specific performance function.

        Perhaps more revolutionary is carbon's expansion into iron design. Traditionally dominated by steel, iron bodies are now incorporating composite components in strategic locations. Ping's new multi-material construction uses carbon fiber in the upper cavity and hosel areas, removing 28 grams from non-performance areas. This weight is redistributed to lower the center of gravity and increase MOI, making their players' irons perform with game-improvement forgiveness while maintaining workability.

        Even putters, the most traditional category, have embraced carbon technology. Odyssey's new Carbon Elite series features a carbon fiber face insert that improves energy transfer by 18% compared to their previous inserts. The material's inherent vibration dampening properties also enhance feel, providing better feedback on strike quality.

        The manufacturing advances making this revolution possible are equally impressive. New high-pressure molding techniques allow for previously impossible geometries, while automated layering systems ensure consistency across production runs. The result is carbon components with tighter tolerances than their metal predecessors.

        For consumers, the carbon revolution translates to measurable performance gains. Robot testing shows modern carbon-intensive clubs provide an average of 8 yards additional driver distance compared to equivalent all-metal designs from just five years ago. More importantly, mishit performance has improved dramatically, with off-center hits retaining up to 15% more ball speed.

        As manufacturing costs decrease and design expertise increases, we can expect carbon composites to continue their expansion across all club categories, pushing performance boundaries even further.
      `
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Golf Insights & Expertise
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The latest news, analysis, and advice from the world of golf
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {category.name} <span className="text-gray-500">({category.count})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {featuredPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                    <FaCalendarAlt className="h-4 w-4 text-emerald-600" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                    <FaUser className="h-4 w-4 text-emerald-600" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                    <FaTag className="h-4 w-4 text-emerald-600" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Recent Articles
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Stay up to date with the latest news, tips, and insights from the world of golf
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.filter(post => !post.featured).slice(0, 4).map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white text-xs font-medium bg-emerald-600/90 rounded-full px-2.5 py-0.5">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <FaCalendarAlt className="h-3 w-3 text-emerald-600" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaUser className="h-3 w-3 text-emerald-600" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                  >
                    Read more
                    <FaArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog/archive"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-emerald-600 px-6 text-base font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Golf Insights
            </h2>
            <p className="text-emerald-100 mb-6">
              Subscribe to our newsletter to receive the latest articles, tips, and exclusive content directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-lg bg-white px-5 py-3 font-medium text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-emerald-100 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}