import React, { useState } from 'react';
import {
  Calendar,
  ClipboardList,
  Printer,
  BarChart3,
  Smartphone,
  Eye,
  PiggyBank,
  Shield,
  UserCheck,
  ChevronRight,
  Phone,
  Mail,
  Building,
  Clock,
  CheckCircle,
  TrendingUp,
  Truck,
  LayoutGrid,
  RefreshCw,
  Users,
  MessageSquare,
  Timer,
  FileText
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
      <Icon className="w-12 h-12 text-lime-600 mb-6 transform transition-transform group-hover:scale-110" />
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="benefit-card flex items-start space-x-5 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0">
        <Icon className="w-10 h-10 text-lime-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, position, company, content }: { name: string, position: string, company: string, content: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lime-100 to-transparent opacity-50 rounded-bl-full"></div>
      <div className="relative">
        <CheckCircle className="w-10 h-10 text-lime-600 mb-4" />
        <p className="text-gray-700 italic leading-relaxed text-lg">{content}</p>
      </div>
      <div className="border-t mt-6 pt-4 relative">
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{position}, {company}</p>
      </div>
    </div>
  );
}

function DispatchCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative overflow-hidden mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-transparent opacity-50 group-hover:opacity-70 transition-opacity rounded-lg"></div>
        <Icon className="w-12 h-12 text-lime-600 relative z-10 transform group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function MobileFeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-lime-50 rounded-xl">
          <Icon className="w-8 h-8 text-lime-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, description, features }: { title: string, price: string, description: string, features: string[] }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-lime-600">{price}</span>
        <span className="text-gray-600 ml-2">/ 月<small className="ml-1">(税抜)</small></span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://ekius.jp" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full bg-lime-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
      >
        お申し込み
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-lime-600 to-lime-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
        <nav className="relative container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://ekius.jp/st/logo3.png" 
              alt="EKIUS" 
              className="h-8 mr-2"
            />
          </div>
          <a 
            href="https://ekius.jp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-lime-600 px-6 py-3 rounded-full font-semibold hover:bg-lime-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            詳しくはこちら
          </a>
        </nav>
        <div className="relative container mx-auto px-6 py-28 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-8 leading-tight max-w-4xl">
            運送業の未来を切り開く、<br />業務効率化のパートナー
          </h1>
          <p className="text-xl mb-12 max-w-2xl leading-relaxed opacity-90">
            EKIUSは、運送業界に特化した包括的な業務管理システムです。
            効率化と生産性向上を実現し、あなたのビジネスの成長をサポートします。
          </p>
          <div className="flex gap-4">
            <a 
              href="https://ekius.jp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-lime-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-50 transition-all duration-300 inline-flex items-center shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              詳しく見る
              <ChevronRight className="ml-2" />
            </a>
            <a 
              href="https://ekius.jp" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-lime-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-800 transition-all duration-300 inline-flex items-center border border-lime-500 transform hover:-translate-y-0.5"
            >
              資料請求
              <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
        <div className="wave-shape">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </header>

      {/* Key Points */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 text-lime-600" />
              <div>
                <h3 className="font-bold text-xl mb-1">業務時間の削減</h3>
                <p className="text-gray-600">事務作業を効率化</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform">
              <Shield className="w-12 h-12 text-lime-600" />
              <div>
                <h3 className="font-bold text-xl mb-1">法令遵守の強化</h3>
                <p className="text-gray-600">確実な車検・点検管理</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 transform hover:scale-105 transition-transform">
              <TrendingUp className="w-12 h-12 text-lime-600" />
              <div>
                <h3 className="font-bold text-xl mb-1">収益性の向上</h3>
                <p className="text-gray-600">無駄なコストを最小化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="diagonal-box py-24">
        <div className="diagonal-content">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">システムの特徴</h2>
              <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
                運送業務に必要な機能を完全網羅。
                使いやすさと効率性を追求した統合管理システムです。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Calendar}
                title="車検管理機能"
                description="車両の車検期限を一元管理し、期限前に通知でリマインド。法令遵守をサポートし、安全な運行を実現します。"
              />
              <FeatureCard
                icon={ClipboardList}
                title="オーダー管理"
                description="配車表やオーダーの一括登録で、効率的な配車計画を実現。リアルタイムでの状況把握で迅速な対応が可能です。"
              />
              <FeatureCard
                icon={Printer}
                title="印刷機能"
                description="請求書や運転日報などの書類を簡単に印刷。定型フォーマットで美しく、正確な書類作成を支援します。"
              />
              <FeatureCard
                icon={BarChart3}
                title="帳票管理"
                description="売上管理や損益計算が容易に行える高機能な帳票システム。経営判断に必要なデータを瞬時に確認できます。"
              />
              <FeatureCard
                icon={Smartphone}
                title="スマートフォン対応"
                description="ドライバーがスマートフォンで簡単に勤怠管理や日報入力が可能。現場からのリアルタイムな情報共有を実現します。"
              />
              <FeatureCard
                icon={Truck}
                title="統合管理システム"
                description="車両、人員、案件のすべてを一元管理。業務の効率化と正確な管理で、運送業務の質を向上させます。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dispatch Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-lime-50 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">配車表機能の特長</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              EKIUSの配車表機能は、運送業務の効率化を実現する
              強力なツールとして設計されています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="配車表システムイメージ"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Excel感覚の使いやすさ</h3>
                  <p className="text-gray-200">
                    従来のExcelユーザーでも直感的に操作できる
                    デザインで、スムーズな移行を実現
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <DispatchCard
                icon={LayoutGrid}
                title="直感的な操作性"
                description="従来のExcelライクなレイアウトを維持しつつ、Webならではの使いやすさを実現。導入後すぐに活用できます。"
              />
              <DispatchCard
                icon={RefreshCw}
                title="リアルタイムデータ反映"
                description="運行状況やオーダーの変更がリアルタイムで反映され、常に最新の情報で配車計画が可能です。"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DispatchCard
              icon={Eye}
              title="業務の可視化"
              description="進捗状況を一目で把握でき、問題点の早期発見が可能。運行の最適化とリソースの有効活用を実現します。"
            />
            <DispatchCard
              icon={Users}
              title="チーム連携の強化"
              description="情報共有がリアルタイムで行え、チーム全体の連携が強化。業務のスムーズな運営を実現します。"
            />
            <DispatchCard
              icon={MessageSquare}
              title="スムーズな情報共有"
              description="ドライバーやスタッフとのコミュニケーションが円滑に。迅速な情報共有で業務効率が向上します。"
            />
            <DispatchCard
              icon={TrendingUp}
              title="業務効率の向上"
              description="直感的な操作と高度な機能の組み合わせにより、配車業務全体の効率を大幅に改善します。"
            />
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">スマートフォンで簡単操作</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ドライバーの業務をスマートフォンで完結。
              いつでもどこでも簡単に必要な情報を入力できます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="スマートフォンアプリのイメージ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-30"></div>
            </div>

            <div className="space-y-8">
              <MobileFeatureCard
                icon={Timer}
                title="勤怠管理"
                description="出勤・退勤の打刻や休憩時間の記録が簡単に行えます。GPSと連動で位置情報も自動記録。"
              />
              <MobileFeatureCard
                icon={FileText}
                title="運転日報"
                description="運行中の状況をリアルタイムで入力。走行距離や燃料消費量なども簡単に記録できます。"
              />
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6">
                    <div className="text-lg font-bold text-lime-600 mb-2">事務作業時間</div>
                    <p className="text-gray-600">大幅な削減を実現</p>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-lg font-bold text-lime-600 mb-2">書類管理</div>
                    <p className="text-gray-600">デジタル化を推進</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="curved-section-top curved-section-bottom py-24">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">導入によるメリット</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              EKIUSの導入により、業務効率の向上から
              コスト削減まで、様々なメリットを実現します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard
              icon={Eye}
              title="業務の可視化"
              description="進捗状況や問題点をリアルタイムで把握し、迅速な意思決定を可能にします。データに基づく的確な判断で、業務改善を実現します。"
            />
            <BenefitCard
              icon={PiggyBank}
              title="コスト削減"
              description="効率的な業務運営により、無駄なコストを削減し、収益性を向上。人件費や管理コストの最適化を実現します。"
            />
            <BenefitCard
              icon={Shield}
              title="法令遵守の強化"
              description="車検管理機能により、コンプライアンスリスクを最小限に抑制。安全で信頼される運送業務の実現をサポートします。"
            />
            <BenefitCard
              icon={UserCheck}
              title="スタッフの負担軽減"
              description="自動化された機能により、事務作業の負担を大幅に軽減。スタッフが本来の業務に集中できる環境を提供します。"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-50 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">お客様の声</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              EKIUSを導入いただいたお客様からの、
              実際の評価やフィードバックをご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              name="田中 健一"
              position="代表取締役"
              company="田中運送株式会社"
              content="EKIUSの導入により、業務効率が大幅に改善されました。特に車検管理機能は、車両管理の負担を大きく軽減してくれています。安全管理の面でも大きな安心感があります。"
            />
            <Testimonial
              name="佐藤 美咲"
              position="運行管理者"
              company="佐藤物流"
              content="スマートフォン対応の勤怠管理システムは、ドライバーからも好評です。日報作成の時間が大幅に削減され、より重要な業務に時間を使えるようになりました。"
            />
            <Testimonial
              name="鈴木 太郎"
              position="経営企画部長"
              company="鈴木運輸"
              content="帳票管理機能により、経営状況の把握が容易になりました。的確な経営判断が可能になり、会社の成長に大きく貢献しています。導入して本当に良かったです。"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-50 to-transparent opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">料金プラン</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ビジネスの規模に合わせて、最適なプランをお選びいただけます。
              全てのプランで30日間の無料トライアルをご利用いただけます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="ライトプラン"
              price="15,000円"
              description="小規模事業者向けの基本機能を搭載したプラン"
              features={[
                "基本的な配車表機能",
                "スマートフォンアプリ利用可能",
                "メールサポート",
                "基本的な帳票出力"
              ]}
            />
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-lime-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  人気プラン
                </span>
              </div>
              <PricingCard
                title="スタンダードプラン"
                price="30,000円"
                description="中規模事業者向けの充実した機能を搭載したプラン"
                features={[
                  "高度な配車最適化機能",
                  "リアルタイムGPS追跡",
                  "24時間電話サポート",
                  "カスタム帳票作成",
                  "API連携機能"
                ]}
              />
            </div>
            <PricingCard
              title="プロフェッショナルプラン"
              price="50,000円"
              description="大規模事業者向けの高度な機能を搭載したプラン"
              features={[
                "AI配車最適化機能",
                "高度なデータ分析",
                "専任サポート担当者",
                "システムカスタマイズ対応",
                "オンサイトトレーニング"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="diagonal-box py-24">
        <div className="diagonal-content">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">未来の運送業務を、今すぐ始めましょう</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-white opacity-90">
              30日間の無料トライアルで、EKIUSの可能性を体験してください。
              導入のサポートも万全の体制で対応いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ekius.jp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-lime-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-50 transition-all duration-300 inline-flex items-center shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                詳しく見る
                <ChevronRight className="ml-2" />
              </a>
              <a 
                href="https://ekius.jp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-lime-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-800 transition-all duration-300 inline-flex items-center border border-lime-500 transform hover:-translate-y-0.5"
              >
                資料請求
                <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900 to-transparent opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center text-white mb-4">
                <img 
                  src="https://ekius.jp/st/logo3.png" 
                  alt="EKIUS" 
                  className="h-8 mr-2"
                />
              </div>
              <p className="mb-4 text-gray-400">運送業務の効率化を支援する総合システム</p>
              <a 
                href="https://ekius.jp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lime-400 hover:text-lime-300 transition-colors"
              >
                公式サイトはこちら
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">会社情報</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://ekius.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-lime-400 transition-colors"
                  >
                    会社概要
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ekius.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-lime-400 transition-colors"
                  >
                    採用情報
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ekius.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-lime-400 transition-colors"
                  >
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ekius.jp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-lime-400 transition-colors"
                  >
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">ソーシャルメディア</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/EKIUS_LLC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-lime-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EKIUS_LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;