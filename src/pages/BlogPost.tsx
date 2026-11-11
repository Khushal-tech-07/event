import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { BLOG_POSTS } from "../data/posts";
import { 
  Calendar, Clock, Share2, ThumbsUp, MessageSquare, 
  ArrowLeft, ArrowRight, Check, Twitter, Link2, Send, Sparkles, BookOpen 
} from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [copiedLink, setCopiedLink] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "c-1",
      author: "Prof. Arthur Thorne",
      content: "Superb breakdown of the coordinate sign inversion at r = 2GM/c². Many general science articles fail to explain why rocket thrust accelerates your plunge toward the singularity—thank you for articulating the timelike nature of the radial geodesic so clearly!",
      timestamp: "2 days ago",
      likes: 14,
    },
    {
      id: "c-2",
      author: "Samantha Li",
      content: "The contrast between falling into Sgr A* vs a stellar-mass black hole was mindblowing. Tidal forces really are counterintuitive when dealing with supermassive event horizons.",
      timestamp: "Yesterday",
      likes: 7,
    },
  ]);

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIndex];

  // Previous & Next navigation
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Related posts (from same category or fallback)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.id !== post?.id && (p.category === post?.category || p.featured)
  ).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center px-4">
        <h2 className="font-heading text-3xl font-bold text-white">Article Not Found</h2>
        <p className="text-slate-400 mt-2 mb-6">The cosmic coordinates you requested do not exist in this sector.</p>
        <Link
          to="/blog"
          className="px-6 py-2.5 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-sm"
        >
          Return to Blog Archive
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: commentName.trim(),
      content: commentText.trim(),
      timestamp: "Just now",
      likes: 1,
    };

    setComments([newComment, ...comments]);
    setCommentName("");
    setCommentText("");
  };

  const handleLikeComment = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-24 pb-20">
      <SEO title={post.title} description={post.excerpt} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#ff8a3d] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* HEADER AREA */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#ff8a3d]/20 text-[#ff8a3d] border border-[#ff8a3d]/30 text-xs font-mono font-semibold">
              {post.category}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="font-subheading text-base sm:text-lg text-slate-300 leading-relaxed italic border-l-2 border-[#ff8a3d] pl-4">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#ff8a3d]/40"
              />
              <div>
                <div className="text-sm font-medium text-white">{post.author.name}</div>
                <div className="text-xs text-slate-400">{post.author.role}</div>
              </div>
            </div>

            {/* Social Share Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff8a3d]/40 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
                title="Copy article link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff8a3d]/40 text-slate-300 hover:text-white transition-colors"
                title="Share on Twitter / X"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* HERO IMAGE & CAPTION */}
        <figure className="space-y-2">
          <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 sm:h-96 md:h-[460px] object-cover"
            />
          </div>
          {post.imageCaption && (
            <figcaption className="text-xs font-mono text-slate-400 text-center italic">
              {post.imageCaption}
            </figcaption>
          )}
        </figure>

        {/* ARTICLE BODY */}
        <article className="prose prose-invert max-w-none space-y-6 text-slate-200 leading-relaxed text-base sm:text-lg">
          {/* Inject rich HTML content */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 [&>h2]:font-heading [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:pt-6 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-white/10 [&>p]:leading-relaxed [&>blockquote]:p-5 [&>blockquote]:rounded-2xl [&>blockquote]:bg-[#ff8a3d]/10 [&>blockquote]:border-l-4 [&>blockquote]:border-[#ff8a3d] [&>blockquote]:text-slate-100 [&>blockquote]:italic [&>blockquote>span]:block [&>blockquote>span]:text-xs [&>blockquote>span]:font-mono [&>blockquote>span]:text-[#ffaa55] [&>blockquote>span]:mt-2"
          />
        </article>

        {/* TAGS ROW */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Tagged:</span>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-[#ff8a3d]/40 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>

        {/* PREVIOUS / NEXT NAVIGATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-1 text-left group"
            >
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 text-[#ff8a3d]" /> Previous Essay
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-[#ff8a3d] line-clamp-1 transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}

          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-1 text-right group"
            >
              <span className="text-[11px] font-mono text-slate-400 flex items-center justify-end gap-1">
                Next Essay <ArrowRight className="w-3.5 h-3.5 text-[#ff8a3d]" />
              </span>
              <span className="text-sm font-semibold text-white group-hover:text-[#ff8a3d] line-clamp-1 transition-colors">
                {nextPost.title}
              </span>
            </Link>
          )}
        </div>

        {/* RELATED POSTS (3 Cards) */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-white/10 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ff8a3d]" /> Related Explorations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="rounded-2xl glass-panel glass-panel-hover overflow-hidden border border-slate-700/80 p-4 space-y-2 group block"
                >
                  <span className="text-[10px] font-mono text-[#ff8a3d] block">{rel.category}</span>
                  <h4 className="text-sm font-semibold text-white group-hover:text-[#ff8a3d] line-clamp-2 transition-colors">
                    {rel.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono block pt-1">
                    {rel.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* COMMENTS SECTION (Mock in Local State) */}
        <section className="pt-10 border-t border-white/10 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#ff8a3d]" />
              <span>Cosmic Discussion ({comments.length})</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Community Discourse</span>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="p-6 rounded-2xl glass-panel space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Leave a Thought or Observation:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                placeholder="Your Name / Call Sign..."
                required
                className="px-3.5 py-2 rounded-xl bg-black/60 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
              />
            </div>

            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Join the discussion... (Relativistic questions, thoughts, or references)"
              rows={3}
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ff8a3d]"
            />

            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#ff8a3d] text-slate-950 font-bold text-xs hover:bg-[#ff9d5c] transition-colors flex items-center gap-1.5"
            >
              <span>Transmit Response</span>
              <Send className="w-3 h-3" />
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-5 rounded-2xl glass-panel border border-slate-700/60 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{comment.author}</span>
                    <span className="text-[10px] font-mono text-slate-500">• {comment.timestamp}</span>
                  </div>
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-[#ff8a3d] transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{comment.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
