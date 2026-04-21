"use client"

import { ActivateAgentDialog } from "@/registry/bases/base/blocks/preview/cards/activate-agent-dialog"
import { AnalyticsCard } from "@/registry/bases/base/blocks/preview/cards/analytics-card"
import { AnomalyAlert } from "@/registry/bases/base/blocks/preview/cards/anomaly-alert"
import { BarChartCard } from "@/registry/bases/base/blocks/preview/cards/bar-chart-card"
import { BookAppointment } from "@/registry/bases/base/blocks/preview/cards/book-appointment"
import { CodespacesCard } from "@/registry/bases/base/blocks/preview/cards/codespaces-card"
import { ContributionsActivity } from "@/registry/bases/base/blocks/preview/cards/contributions-activity"
import { Contributors } from "@/registry/bases/base/blocks/preview/cards/contributors"
import { EnvironmentVariables } from "@/registry/bases/base/blocks/preview/cards/environment-variables"
import { FeedbackForm } from "@/registry/bases/base/blocks/preview/cards/feedback-form"
import { FileUpload } from "@/registry/bases/base/blocks/preview/cards/file-upload"
import { GithubProfile } from "@/registry/bases/base/blocks/preview/cards/github-profile"
import { IconPreviewGrid } from "@/registry/bases/base/blocks/preview/cards/icon-preview-grid"
import { InviteTeam } from "@/registry/bases/base/blocks/preview/cards/invite-team"
import { Invoice } from "@/registry/bases/base/blocks/preview/cards/invoice"
import { LiveWaveformCard } from "@/registry/bases/base/blocks/preview/cards/live-waveform"
import { NoTeamMembers } from "@/registry/bases/base/blocks/preview/cards/no-team-members"
import { NotFound } from "@/registry/bases/base/blocks/preview/cards/not-found"
import { ObservabilityCard } from "@/registry/bases/base/blocks/preview/cards/observability-card"
import { PieChartCard } from "@/registry/bases/base/blocks/preview/cards/pie-chart-card"
import { ReportBug } from "@/registry/bases/base/blocks/preview/cards/report-bug"
import { ShippingAddress } from "@/registry/bases/base/blocks/preview/cards/shipping-address"
import { Shortcuts } from "@/registry/bases/base/blocks/preview/cards/shortcuts"
import { SkeletonLoading } from "@/registry/bases/base/blocks/preview/cards/skeleton-loading"
import { SleepReport } from "@/registry/bases/base/blocks/preview/cards/sleep-report"
import { StyleOverview } from "@/registry/bases/base/blocks/preview/cards/style-overview"
import { TypographySpecimen } from "@/registry/bases/base/blocks/preview/cards/typography-specimen"
import { UIElements } from "@/registry/bases/base/blocks/preview/cards/ui-elements"
import { UsageCard } from "@/registry/bases/base/blocks/preview/cards/usage-card"
import { Visitors } from "@/registry/bases/base/blocks/preview/cards/visitors"
import { WeeklyFitnessSummary } from "@/registry/bases/base/blocks/preview/cards/weekly-fitness-summary"

export default function PreviewExample() {
  const cards = [
    <StyleOverview key="style-overview" />,
    <TypographySpecimen key="typography-specimen" />,
    <div key="ui-elements-mobile" className="md:hidden">
      <UIElements />
    </div>,
    <CodespacesCard key="codespaces-card" />,
    <Invoice key="invoice" />,
    <IconPreviewGrid key="icon-preview-grid" />,
    <div key="ui-elements-desktop" className="hidden md:block">
      <UIElements />
    </div>,
    <ObservabilityCard key="observability-card" />,
    <ShippingAddress key="shipping-address" />,
    <EnvironmentVariables key="environment-variables" />,
    <BarChartCard key="bar-chart-card" />,
    <InviteTeam key="invite-team" />,
    <ActivateAgentDialog key="activate-agent-dialog" />,
    <SkeletonLoading key="skeleton-loading" />,
    <PieChartCard key="pie-chart-card" />,
    <NoTeamMembers key="no-team-members" />,
    <ReportBug key="report-bug" />,
    <Contributors key="contributors" />,
    <FeedbackForm key="feedback-form" />,
    <BookAppointment key="book-appointment" />,
    <SleepReport key="sleep-report" />,
    <GithubProfile key="github-profile" />,
    <WeeklyFitnessSummary key="weekly-fitness-summary" />,
    <FileUpload key="file-upload" />,
    <AnalyticsCard key="analytics-card" />,
    <UsageCard key="usage-card" />,
    <Shortcuts key="shortcuts" />,
    <AnomalyAlert key="anomaly-alert" />,
    <LiveWaveformCard key="live-waveform-card" />,
    <Visitors key="visitors" />,
    <ContributionsActivity key="contributions-activity" />,
    <NotFound key="not-found" />,
  ]

  return (
    <div className="contain-[paint] [--gap:--spacing(4)] 3xl:[--gap:--spacing(10)] md:[--gap:--spacing(6)] xl:[--gap:--spacing(8)] style-lyra:md:[--gap:--spacing(6)] style-mira:md:[--gap:--spacing(6)]">
      <div
        className="columns-1 [column-gap:var(--gap)] md:columns-2 xl:columns-3 2xl:columns-4"
        data-slot="capture-target"
      >
        {cards.map((card) => (
          <div
            key={card.key}
            className="mb-(--gap) min-w-0 break-inside-avoid overflow-hidden rounded-[calc(var(--radius-4xl)+1px)] [&>*]:w-full"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  )
}
