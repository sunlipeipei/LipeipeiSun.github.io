import React from 'react';
import { imgUrl } from '../../utils/assetUrl';

export default function DeepWork() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Building DeepWork: How We Used AI as a Full-Stack Engineering Pipeline
            </h1>
            <p className="text-muted mt-2">Full-Stack Development & AI Engineering · March 2026</p>
            <p className="text-muted">By Qi (Dako) Wei & Lipeipei Sun</p>
          </div>

          <img
            src={imgUrl('/Images/12_DeepWork.png')}
            className="img-fluid rounded shadow-sm d-block mx-auto mb-4"
            alt="DeepWork UI"
            style={{ maxWidth: '600px', borderRadius: '16px' }}
          />

          <div className="d-flex gap-3 justify-content-center mb-5">
            <a href="https://deepwork-two.vercel.app/" className="btn btn-dark btn-modern" target="_blank" rel="noreferrer">
              Live App
            </a>
            <a href="https://github.com/sunlipeipei/cs7180-project2" className="btn btn-outline-dark btn-modern" target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
          </div>

          <div className="col-lg-8 mx-auto text-start">
            <h4 className="mb-3">1. Introduction</h4>
            <p className="mb-4">
              Most developers use AI to write code faster. We used it differently — as a structured engineering pipeline where every stage had a defined input, a defined output, and a defined AI tool responsible for bridging the two.
            </p>
            <p className="mb-5">
              DeepWork is a full-stack Pomodoro focus timer built for users who reject rigid session transitions. When a focus session ends, the app sends a gentle notification — it never forces a break. Sessions are logged automatically, tagged by project, and surfaced in an analytics dashboard so users can actually understand their own productivity patterns. The stack is Next.js 16 with App Router, MongoDB Atlas, JWT authentication via HTTP-only cookies, and Tailwind CSS, deployed on Vercel. We built it in two one-week sprints, as a two-person team, with 80%+ test coverage enforced from day one.
            </p>

            <h4 className="mb-3">2. Using Artifacts to Rapidly Design and Iterate</h4>
            <p className="mb-4 fw-bold">
              The core claim: Claude Web artifacts let us validate the full UI before writing a single backend route — and kept evolving as a living design document throughout both sprints, not a one-time throwaway deliverable.
            </p>

            <h5 className="mt-4">Before Code: From User Stories to a Working Prototype</h5>
            <p className="mb-4">
              Every feature in DeepWork traces back to a behavioral interview. We conducted three Mom Test interviews in February 2026. We fed the raw interview notes into Claude and asked it to identify recurring pain points, extract validated personas, and translate them into structured user stories with acceptance criteria. The output directly shaped our PRD. For example, all three interviewees described dismissing timer alerts mid-thought — not occasionally, but consistently. Claude helped us articulate this as an engineering requirement rather than a UX preference: <em>"As a remote worker, I want to be notified when a session ends without being forced into a break, so I can finish my current thought before switching."</em>
            </p>
            <p className="mb-4">
              With user stories in hand, we used Claude's artifact feature to generate a working React prototype — a fully rendered, interactive UI — before touching the backend. Decisions that would have been expensive to reverse later — like how the accumulated focus bar relates to the per-session timer, or where the tag input lives in the session flow — were settled visually in minutes.
            </p>

            <h5 className="mt-4">During Implementation: The Prototype as a Living Document</h5>
            <p className="mb-5">
              Midway through Sprint 1, as we built the actual features, we hit usability issues that the prototype had not revealed. Rather than treating the prototype as a finished artifact, we went back to Claude Web, described what we had learned, and updated it. We treated it as a checkpoint. Every time real development surfaced a design assumption worth revisiting, the prototype was updated to reflect the new understanding.
            </p>

            <h4 className="mb-3">3. Delivering High-Quality Code with Agentic AI</h4>
            <p className="mb-4 fw-bold">
              The core claim: agentic AI produces high-quality code only when the process constrains it. Our two-chat TDD workflow and CI/CD pipeline made quality a mechanical guarantee, not a judgment call.
            </p>

            <h5 className="mt-4">The Two-Chat TDD Workflow</h5>
            <p className="mb-4">
              We enforced a strict two-phase TDD cycle that treated AI the same way you treat any developer on a team:
            </p>
            <p className="mb-4">
              <strong>Phase 1 — Write Tests (Red State).</strong> A Claude Code session read the user story and wrote failing integration tests. No implementation code. At the end of Phase 1, every new test had to fail.
            </p>
            <p className="mb-5">
              <strong>Phase 2 — Implement to Pass (Green State).</strong> A separate Claude Code session then implemented the minimum code required to make those tests pass. Critically, test files were locked by a pre-commit hook — <code>guard-test-files.sh</code> — during this phase. If a test failed, the instruction was unambiguous: fix the implementation, never the test.
            </p>

            <h4 className="mb-3">4. What We Learned</h4>
            <p className="mb-4">
              <strong>First: constrained roles consistently outperform open-ended prompts.</strong> Every tool had a job. The quality of the output was directly proportional to the specificity of the constraint.
            </p>
            <p className="mb-4">
              <strong>Second: documentation is the real force multiplier.</strong> We maintained a <code>CLAUDE.md</code> file — a project-level instruction document that told Claude Code the architecture patterns, naming conventions, and testing philosophy.
            </p>
            <p className="mb-4">
              <strong>Third: the pipeline itself is the repeatable asset.</strong> AI-assisted engineering is not faster because AI writes more code. It is faster because it compresses the feedback loops between design, implementation, and validation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
