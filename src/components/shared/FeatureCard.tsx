import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  tags?: string[];
  link?: {
    text: string;
    href: string;
  };
  metrics?: {
    value: string;
    label: string;
  }[];
}

interface FeatureCardProps {
  feature: Feature;
  variant?: 'default' | 'detailed' | 'compact' | 'highlight';
  layout?: 'vertical' | 'horizontal';
}

const FeatureCard = ({ 
  feature, 
  variant = 'default', 
  layout = 'vertical' 
}: FeatureCardProps) => {
  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';
  const isHighlight = variant === 'highlight';
  const isHorizontal = layout === 'horizontal';

  const cardClass = `bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ${
    isHighlight ? 'border-l-4 border-l-primary' : ''
  } ${isHorizontal ? 'flex-row' : ''}`;

  const tagPalette = [
    "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
    "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100",
    "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",
    "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100",
    "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
  ] as const;

  const tagClass = (tag: string) => {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
    return tagPalette[hash % tagPalette.length];
  };

  return (
    <Card className={cardClass}>
      <CardHeader className={isCompact ? 'pb-4' : 'pb-6'}>
        <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${isHorizontal ? 'items-center space-x-4' : 'items-start'}`}>
          <div
            className={`${isCompact ? 'w-10 h-10' : 'w-12 h-12'} rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200 bg-gradient-to-br from-white to-slate-50 ${isHorizontal ? '' : 'mb-4'}`}
          >
            <feature.icon className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} text-primary hover:text-secondary transition-colors`} />
          </div>
          
          <div className="flex-1">
            <CardTitle className={`${isCompact ? 'text-lg' : 'text-xl'} font-semibold ${isHorizontal ? 'mb-2' : 'mb-3'}`}>
              {feature.title}
            </CardTitle>
            
            {feature.tags && !isCompact && (
              <div className="flex flex-wrap gap-2 mb-3">
                {feature.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`text-[11px] font-semibold backdrop-blur-sm ${tagClass(tag)}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className={isCompact ? 'pt-0' : ''}>
        <p className={`text-gray-600 ${isCompact ? 'text-sm' : 'text-base'} leading-relaxed mb-4`}>
          {feature.description}
        </p>

        {feature.benefits && isDetailed && (
          <div className="mb-6">
            <h4 className="font-medium text-foreground mb-3">Key Benefits:</h4>
            <ul className="space-y-2">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {feature.metrics && isDetailed && (
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              {feature.metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-primary">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {feature.link && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary hover:text-secondary p-0 h-auto font-medium underline"
          >
            {feature.link.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  variant?: 'default' | 'detailed' | 'compact' | 'highlight';
  layout?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
  backgroundVariant?: 'white' | 'gray';
}

const FeaturesSection = ({ 
  title, 
  subtitle, 
  features, 
  variant = 'default',
  layout = 'grid',
  columns = 3,
  backgroundVariant = 'white'
}: FeaturesSectionProps) => {
  const bgClass = backgroundVariant === 'gray' ? 'bg-neutral-light' : 'bg-white';
  
  const gridClass = layout === 'list' ? 'space-y-6' : {
    1: 'grid-cols-1',
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
  }[columns];

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={gridClass}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              variant={variant}
              layout={layout === 'list' ? 'horizontal' : 'vertical'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureCard, FeaturesSection };
export default FeatureCard;
