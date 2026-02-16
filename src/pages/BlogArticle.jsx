import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft, ChevronRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogArticle() {
  const { slug } = useParams();

  const article = useMemo(() => articles.find(a => a.slug === slug), [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter(a => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEOHead title="Article Not Found" path={`/Blog/${slug}`} />
        <Navbar onContactClick={scrollToContact} alwaysSolid={true} />
        <div className="pt-40 text-center py-20">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/Blog">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={article.title}
        path={`/Blog/${article.slug}`}
        description={article.metaDescription}
        type="article"
        article={article}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Article Header */}
      <div className="bg-slate-900 pt-40 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/Blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <motion.article
          className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="prose prose-lg prose-slate max-w-none
            prose-headings:text-slate-900 prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-li:text-slate-600
            prose-strong:text-slate-900
            prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-ol:my-4
          ">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </motion.article>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <Tag className="w-4 h-4 text-slate-400" />
          {article.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white text-slate-500 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-10 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your New Home Build?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            J&N StructureWorks is a Florida Certified Building Contractor serving Orange, Seminole,
            Osceola, and Lake counties. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 h-12">
                Get a Free Quote
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/Services">
              <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 h-12 px-8">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  to={`/Blog/${related.slug}`}
                  className="group block bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-600 mb-3">
                    {related.category}
                  </span>
                  <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                    {related.title}
                  </h4>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
