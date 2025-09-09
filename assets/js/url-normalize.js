/**
 * URL Normalization Script
 * Handles double slash redirects and URL normalization
 */
(function() {
    'use strict';
    
    // Function to normalize URL by removing duplicate slashes
    function normalizeURL() {
        var currentPath = window.location.pathname;
        var baseUrl = document.querySelector('meta[property="og:url"]')?.content || 
                     document.querySelector('link[rel="canonical"]')?.href || '';
        
        // Check if we have double or multiple slashes in the path
        if (currentPath.includes('//')) {
            // Remove duplicate slashes but keep the leading slash
            var normalizedPath = currentPath.replace(/\/+/g, '/');
            
            // Redirect to the normalized URL
            var newUrl = window.location.origin + normalizedPath;
            
            // Use replace instead of assign to avoid adding to browser history
            window.location.replace(newUrl);
            return true;
        }
        
        return false;
    }
    
    // Run normalization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', normalizeURL);
    } else {
        normalizeURL();
    }
})();
