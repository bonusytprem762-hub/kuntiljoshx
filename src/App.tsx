import React, { useState, useEffect } from 'react';
import { 
  Coins, 
  Clock, 
  Heart, 
  Zap, 
  Rocket, 
  Users, 
  ArrowRight, 
  Trophy,
  Target,
  Sparkles,
  ExternalLink,
  Shield,
  CheckCircle,
  BarChart3,
  RefreshCw,
  Lock,
  Globe,
  FileText,
  Copy
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 9,
    seconds: 59
  });
  const [showFlash, setShowFlash] = useState(false);
  const [copiedContract, setCopiedContract] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset to 10 minutes
          setShowFlash(true);
          setTimeout(() => setShowFlash(false), 1000);
          return { minutes: 9, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const contractAddress = "GANTI ALAMAT URL PUMPFUN KOINNYA";
  
  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedContract(true);
    setTimeout(() => setCopiedContract(false), 2000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 via-purple-600 to-pink-500">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pink-300/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300/10 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <Coins className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🍴</span>
              </div>
            </div>
          </div>

          {/* Main Tagline */}
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              FeedMeSOL
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-bold">
              The Meme Coin That Literally
            </span>
            <br />
            <span className="text-3xl md:text-5xl font-black bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
              Feeds You SOL Every 10 Minutes 🍴
            </span>
          </h1>

          {/* SOL Rewards Info */}
          <div className="mb-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 max-w-2xl mx-auto">
            <p className="text-white text-lg font-semibold mb-2">
              💰 Earn SOL simply by holding $FMS in your wallet
            </p>
            <p className="text-white/80 text-sm">
              No staking steps — if you hold $FMS in your wallet, you'll receive $SOL drops automatically
            </p>
          </div>
          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
  <a 
    href="https://google.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
  >
    Buy $FMS <ArrowRight className="w-5 h-5" />
  </a>
            <a 
              href="https://t.me/FeedMeSOL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-xl shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Join Community <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Countdown Timer */}
          <div className={`bg-white/20 backdrop-blur-md rounded-3xl p-6 max-w-md mx-auto shadow-2xl transition-all duration-500 ${showFlash ? 'bg-yellow-400/40 scale-105' : ''}`}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span className="text-white font-semibold text-lg">Next SOL Drop in:</span>
            </div>
            <div className="text-4xl font-black text-white">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
            <p className="text-white/70 text-xs mt-2">
              Auto-distributed every 10 minutes — check last tx on Solana explorer
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-gray-800 mb-8 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            What is FeedMeSOL?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              FeedMeSOL is a meme coin built on Solana blockchain that rewards holders in $SOL every 10 minutes. 
              It's fun, fast, and rewarding — because why hodl if you can get fed?
            </p>
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-6xl">😋</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose $FMS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-800 mb-8 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose $FMS?
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-4xl mx-auto">
            From pioneering a meme-first reward token on Solana that distributes real $SOL directly to holders every 10 minutes, 
            FeedMeSOL is built for fun and transparency. With an audited smart contract and 100% on-chain execution, 
            all distributions are verifiable on-chain — no hidden tricks, only rewards.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* System Secure */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SYSTEM.SECURE</h3>
              <p className="text-gray-600 mb-4">
                Contract audited and verified. No backdoors, no hidden fees, no team allocation. 
                100% community-owned and transparent.
              </p>
              <a href="#" className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Audit report
              </a>
            </div>

            {/* 5% Tax Distribution */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">5% Tax Distribution</h3>
              <p className="text-gray-600 mb-4">
                All buy, sell, and transfer transactions contribute to the reward pool. 
                A small 5% tax is collected and routed to the reward pool that funds $SOL distributions.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                <span>5%</span>
                <ArrowRight className="w-4 h-4" />
                <span>Reward Pool</span>
              </div>
            </div>

            {/* Auto-Claim System */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Auto-Claim System</h3>
              <p className="text-gray-600 mb-4">
                Auto-Claim — On-chain & automatic every 10 minutes. 
                Rewards are distributed automatically on-chain every 10 minutes. Holders do not need to claim manually.
              </p>
              <p className="text-teal-600 font-semibold text-sm">
                Distributions are staggered and verifiable
              </p>
            </div>

            {/* Fair Launch */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fair Launch</h3>
              <p className="text-gray-600">
                No presale. No team tokens. 100% fair distribution. 
                FeedMeSOL launched fairly — all initial liquidity is added at launch and the community controls the project.
              </p>
            </div>

            {/* Ecosystem */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ECOSYSTEM</h3>
              <p className="text-gray-600">
                A growing, sustainable ecosystem. $FMS has a fast-growing holder base, solid trading volume, 
                transparent on-chain mechanics, and a meme-first community that fuels organic growth.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">COMMUNITY</h3>
              <p className="text-gray-600 mb-4">
                100% community-owned. No team tokens, no presale, no max-wallet limits. 
                The 5% tax on transactions is automatically converted into the reward pool and distributed as $SOL to holders.
              </p>
              <a 
                href="https://x.com/feedmes0L" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                Join Community <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-800 mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How Do You Get Fed?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-200">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Buy & Hold</h3>
              <p className="text-gray-600 text-lg">Grab $FMS and hodl.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-200">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Every 10 Minutes</h3>
              <p className="text-gray-600 text-lg">SOL rewards drop to your wallet.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-200">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoy & Meme</h3>
              <p className="text-gray-600 text-lg">Spread the memes, join the fam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-800 mb-16 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Token Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Supply:</span>
                    <span className="font-bold text-gray-800">998,959,466</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Initial Liquidity:</span>
                    <span className="font-bold text-gray-800">100% added at launch</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax:</span>
                    <span className="font-bold text-gray-800">5% on transactions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fair Launch:</span>
                    <span className="font-bold text-gray-800">100% community</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contract Address</h3>
                <div className="bg-white rounded-2xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-gray-600 break-all">{contractAddress}</code>
                    <button 
                      onClick={copyContract}
                      className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                  {copiedContract && (
                    <p className="text-green-600 text-xs mt-2">Copied to clipboard!</p>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  No team allocation, no presale. All transactions are transparent and verifiable on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Roadmap Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-gray-800 mb-16 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Roadmap 🚀
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Q1 */}
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="text-3xl font-black mb-4">September 2025</div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8" />
              </div>
              <p className="font-semibold">Launch + Meme contests</p>
            </div>

            {/* Q2 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="text-3xl font-black mb-4">January 2026</div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Trophy className="w-8 h-8" />
              </div>
              <p className="font-semibold">Listings + Partnerships</p>
            </div>

            {/* Q3 */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="text-3xl font-black mb-4">May 2026</div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="font-semibold">NFT integration + More rewards</p>
            </div>

            {/* Q4 */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-200">
              <div className="text-3xl font-black mb-4">August 2026</div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌙</span>
              </div>
              <p className="font-semibold">To the Moon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            Join The Family 💜
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            We're not just a coin, we're a meme family. Let's get fed together.
          </p>
          <a 
            href="https://x.com/feedmes0L" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white hover:bg-gray-100 text-purple-600 px-10 py-5 rounded-2xl font-bold text-2xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow @feedmes0L
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
              <Coins className="w-8 h-8 text-white" />
            </div>
            
            {/* Tagline */}
            <p className="text-gray-400 text-center mb-6">
              Built on Solana ⚡ Powered by memes 🍴
            </p>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm mb-4">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#how" className="hover:text-white transition-colors">How It Works</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
              <a href="#" className="hover:text-white transition-colors">Contract</a>
            </div>
            
            {/* Contract Address */}
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-2">Contract Address:</p>
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <code className="text-gray-300 text-xs">{contractAddress}</code>
                <button 
                  onClick={copyContract}
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                >
                  <Copy className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
