import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { articles, categories } from '@/data/articles';
import { Search, Calendar, Clock, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const ARTICLES_PER_PAGE = 12;

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToContact = () => {
    window.location.href = '/Contact';
  };

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.metaDescription.toLowerCase().includes(query) ||
        a.tags.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Blog"
        path="/Blog"
        description="Expert insights on new home construction, budgeting, lot selection, county regulations, building timelines, and renovations in Central Florida."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'J&N StructureWorks Blog',
          description: 'Expert insights on new home construction in Central Florida.',
          url: 'https://j-nsw.com/Blog',
          publisher: { '@type': 'Organization', name: 'J&N StructureWorks' },
        }}
      />
      <Navbar onContactClick={scrollToContact} alwaysSolid={true} />

      {/* Hero Banner */}
      <div className="bg-slate-900 pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Construction Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              New Build Construction Guide
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Expert insights on budgeting, lot selection, county regulations, building timelines,
              and everything you need to know about building a new home in Central Florida.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 h-12 bg-white border-slate-200"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border border-slate-200'
            }`}
          >
            All ({articles.length})
          </button>
          {categories.map(cat => {
            const count = articles.filter(a => a.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border border-slate-200'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <p className="text-slate-500 text-sm mb-6">
          Showing {paginatedArticles.length} of {filteredArticles.length} articles
        </p>

        {/* Article Grid */}
        {paginatedArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/Blog/${article.slug}`}
                  className="group block bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-600">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 text-sm mb-4 flex-1 line-clamp-3">
                      {article.metaDescription}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No articles found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-600 hover:bg-orange-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
