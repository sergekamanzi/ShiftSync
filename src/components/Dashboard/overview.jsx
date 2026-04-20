import {
	FiBell,
	FiCalendar,
	FiChevronDown,
	FiClock,
	FiFilter,
	FiHelpCircle,
	FiHome,
	FiLayers,
	FiMenu,
	FiMoon,
	FiLogOut,
	FiPlus,
	FiSearch,
	FiSettings,
	FiSliders,
	FiUsers,
	FiPieChart,
} from 'react-icons/fi'
import { RiGroupLine, RiRadarLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const metrics = [
	{ title: 'Total Employees', value: '1,284', delta: '+2.4%', icon: RiGroupLine, accent: 'bg-blue-50 text-blue-600' },
	{ title: 'Active Shifts', value: '42', delta: 'LIVE', icon: FiCalendar, accent: 'bg-indigo-50 text-indigo-600' },
	{ title: 'Coverage %', value: '98.2%', delta: 'Optimal', icon: RiRadarLine, accent: 'bg-orange-50 text-orange-600' },
	{ title: 'Overtime (Hrs)', value: '156.5', delta: '-12%', icon: FiClock, accent: 'bg-rose-50 text-rose-600' },
]

const shiftCards = [
	{ name: 'Morning Shift', time: '08:00 AM - 04:00 PM', fill: '94%', status: 'STABLE', tone: 'border-emerald-400 text-emerald-600 bg-emerald-50' },
	{ name: 'Evening Shift', time: '04:00 PM - 12:00 AM', fill: '78%', status: '4 GAPS', tone: 'border-amber-400 text-amber-600 bg-amber-50' },
	{ name: 'Night Shift', time: '12:00 AM - 08:00 AM', fill: '100%', status: 'FULL', tone: 'border-blue-400 text-blue-600 bg-blue-50' },
]

const adjustments = [
	{ employee: 'Marcus Chen', role: 'Shift Swap', original: 'Fri, Jun 12 (Night)', revised: 'Sat, Jun 13 (Morning)', status: 'APPROVED' },
	{ employee: 'Elena Rodriguez', role: 'Overtime Request', original: '08.0 hrs', revised: '12.5 hrs', status: 'PENDING' },
	{ employee: 'David Smith', role: 'Call-out Replacement', original: '---', revised: 'Wed, Jun 10 (Evening)', status: 'URGENT' },
]

const heatmap = [
	['low', 'low', 'medium', 'high', 'high', 'high', 'low'],
	['low', 'medium', 'medium', 'low', 'low', 'high', 'medium'],
]

const weekLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function StatusPill({ children, tone }) {
	return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.14em] ${tone}`}>{children}</span>
}

export default function Overview() {
	return (
		<main className="h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_34%),linear-gradient(180deg,#eef4ff_0%,#f7f9ff_38%,#eef2ff_100%)] text-slate-900">
			<div className="flex h-screen w-full overflow-hidden border border-white/80 bg-white/85 backdrop-blur-xl">
				<aside className="fixed left-0 top-0 hidden h-screen shrink-0 flex-col overflow-hidden border-r border-slate-200/80 bg-[#f2f6ff]/80 px-5 py-6 xl:flex" style={{ width: '264px' }}>
					<div className="flex w-full items-center justify-start gap-3">
						<img src="/logo.png" alt="ShiftSync" className="-ml-6 h-19 w-auto object-contain" />
					</div>

					<nav className="space-y-2 text-[14px] font-medium text-slate-600">
						<Link className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-[#0f51ff]" to="/overview"><FiHome className="h-4 w-4" /> Dashboard Overview</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/profiles"><FiUsers className="h-4 w-4" /> Employee Profiles</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/scheduling"><FiCalendar className="h-4 w-4" /> Shift Scheduling</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/adjustments"><FiSliders className="h-4 w-4" /> Shift Adjustments</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/notifications"><FiBell className="h-4 w-4" /> Notifications</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/compliances"><FiLayers className="h-4 w-4" /> Compliance & Policies</Link>
						<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/reports"><FiPieChart className="h-4 w-4" /> Reports & Analytics</Link>
					</nav>

					<div className="mt-auto space-y-3 pt-8">
						<button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0f51ff] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b44de]"><FiPlus className="h-4 w-4" /> Create New Shift</button>
						<div className="space-y-1 text-sm text-slate-600">
							<Link className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-white/70" to="/manager-settings"><FiSettings className="h-4 w-4" /> Settings</Link>
							<Link className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-rose-600 hover:bg-rose-50" to="/login"><FiLogOut className="h-4 w-4" /> Logout</Link>
						</div>
					</div>
				</aside>

				<div className="dashboard-main-offset flex min-w-0 flex-1 flex-col h-screen overflow-hidden">
					<header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/75 px-4 py-4 backdrop-blur-xl sm:px-6 xl:px-8">
						<div className="flex items-center gap-3 xl:hidden">
							<button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700"><FiMenu className="h-5 w-5" /></button>
							<div className="flex min-w-0 items-center gap-3">
								<span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0f51ff] text-xs font-black text-white">A</span>
								<div className="min-w-0">
									<div className="truncate text-sm font-extrabold text-slate-900">ShiftSync</div>
									<div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Workforce Management</div>
								</div>
							</div>
						</div>

						<div className="mt-4 flex flex-col gap-4 xl:mt-0 xl:flex-row xl:items-center xl:justify-between">
							<label className="relative w-full max-w-3xl">
								<FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
								<input type="search" placeholder="Search resources, shifts, or members..." className="h-12 w-full rounded-full border border-slate-200/80 bg-[#f5f7ff] px-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0f51ff] focus:bg-white" />
							</label>

							<div className="flex items-center justify-between gap-3 xl:justify-end">
								<button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"><FiBell className="h-4 w-4" /></button>
								<button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"><FiMoon className="h-4 w-4" /></button>
								<div className="flex items-center gap-3 rounded-full bg-white px-3 py-2">
									<div className="text-right leading-tight">
										<div className="text-sm font-bold text-slate-900">Alex Thompson</div>
										<div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Shift Manager</div>
									</div>
									<div className="h-10 w-10 overflow-hidden rounded-full bg-[linear-gradient(135deg,#0f51ff,#7ea4ff)] ring-2 ring-[#eef3ff]"><img alt="Alex Thompson" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80" /></div>
									<FiChevronDown className="h-4 w-4 text-slate-400" />
								</div>
							</div>
						</div>
					</header>

					<div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 lg:px-8 xl:px-10">
						<section id="dashboard" className="space-y-5">
							<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<h1 className="text-3xl font-black tracking-[-0.05em] text-slate-950 sm:text-4xl">Dashboard Overview</h1>
									<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">Real-time workforce metrics and performance visibility for the current operational cycle.</p>
								</div>
								<div className="inline-flex rounded-2xl bg-[#f3f6ff] p-1 text-sm font-semibold text-slate-500">
									<button className="rounded-xl bg-white px-4 py-2 text-[#0f51ff]">Last 24 Hours</button>
									<button className="rounded-xl px-4 py-2">7 Days</button>
									<button className="rounded-xl px-4 py-2">30 Days</button>
								</div>
							</div>

							<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
								{metrics.map((metric) => {
									const Icon = metric.icon

									return (
										<article key={metric.title} className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5">
										<div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[42px] bg-[radial-gradient(circle,rgba(15,81,255,0.08),transparent_70%)]" />
										<div className="flex items-start justify-between gap-3">
												<span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${metric.accent}`}><Icon className="h-5 w-5" /></span>
												<span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${metric.delta === 'LIVE' ? 'bg-emerald-50 text-emerald-600' : metric.delta === 'Optimal' ? 'bg-orange-50 text-orange-600' : metric.delta === '-12%' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'}`}>{metric.delta}</span>
										</div>
											<div className="mt-5 text-sm font-medium text-slate-500">{metric.title}</div>
											<div className="mt-1 text-3xl font-black tracking-[-0.06em] text-slate-950">{metric.value}</div>
										</article>
									)
								})}
							</div>
						</section>

						<section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)]">
							<article className="rounded-[26px] border border-slate-200/80 bg-white p-5 sm:p-6">
								<div className="flex flex-wrap items-center justify-between gap-3">
									<div>
										<h2 className="text-xl font-extrabold tracking-[-0.04em] text-slate-950">Attendance Overview</h2>
										<p className="mt-1 text-sm text-slate-500">Daily check-in volume vs predicted attendance</p>
									</div>
									<div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
										<span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#0f51ff]" />Actual</span>
										<span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-300" />Predicted</span>
									</div>
								</div>

								<div className="mt-5 rounded-3xl bg-[linear-gradient(180deg,#f6f8ff_0%,#ffffff_100%)] p-4 sm:p-6">
									<div className="grid h-82.5 grid-cols-7 items-end gap-3 sm:h-90">
										{[38, 58, 74, 66, 82, 88, 72].map((height, index) => (
											<div key={weekLabels[index]} className="flex h-full flex-col items-center justify-end gap-3">
												<div className="relative flex h-full w-full items-end justify-center rounded-[18px] bg-white/40 px-2 pb-2">
													<div className="w-full rounded-2xl bg-[linear-gradient(180deg,rgba(15,81,255,0.95)_0%,rgba(15,81,255,0.42)_100%)]" style={{ height: `${height}%` }} />
													<div className="absolute bottom-2 left-1/2 h-[56%] w-[44%] -translate-x-1/2 rounded-[14px] bg-slate-300/70" />
												</div>
												<span className="text-[11px] font-extrabold tracking-[0.18em] text-slate-500">{weekLabels[index]}</span>
											</div>
										))}
									</div>
								</div>
							</article>

							<article className="rounded-[26px] border border-slate-200/80 bg-[#eef3ff] p-5 sm:p-6">
								<div className="flex items-center justify-between gap-3"><h2 className="text-xl font-extrabold tracking-[-0.04em] text-slate-950">Shift Status</h2><a className="text-sm font-bold text-[#0f51ff]" href="#shifts">View All</a></div>
								<div className="mt-5 space-y-3">
									{shiftCards.map((shift, index) => (
										<div key={shift.name} className="rounded-[18px] border border-white/80 bg-white p-4">
											<div className={`mb-3 h-0.5 w-full rounded-full ${index === 0 ? 'bg-emerald-500' : index === 1 ? 'bg-amber-400' : 'bg-blue-500'}`} />
											<div className="flex items-start justify-between gap-3">
												<div><div className="text-[15px] font-extrabold text-slate-900">{shift.name}</div><div className="mt-1 text-xs font-medium text-slate-500">{shift.time}</div></div>
												<div className="text-right text-sm font-bold text-slate-700"><div>{shift.fill}</div><div className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.12em] ${shift.tone}`}>{shift.status}</div></div>
											</div>
										</div>
									))}
								</div>

								<div className="mt-5 overflow-hidden rounded-[22px] bg-[#10204a] text-white">
									<div className="relative min-h-50 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_40%),linear-gradient(160deg,#17294f_0%,#0f1730_100%)] p-5">
										<div className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200/80">Upcoming Alert</div>
										<h3 className="mt-3 max-w-55 text-2xl font-black tracking-[-0.05em]">Compliance Review: Q3 Documentation due in 4 days.</h3>
										<div className="absolute bottom-4 right-4 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">Priority</div>
									</div>
								</div>
							</article>
						</section>

						<section id="adjustments" className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_320px]">
							<article className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white">
								<div className="flex items-center justify-between gap-3 px-5 py-5 sm:px-6">
									<h2 className="text-xl font-extrabold tracking-[-0.04em] text-slate-950">Recent Shift Adjustments</h2>
									<button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600"><FiFilter className="h-3.5 w-3.5" /> Filter</button>
								</div>
								<div className="overflow-x-auto">
									<table className="min-w-full text-left">
										<thead className="bg-[#f5f7ff] text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
											<tr><th className="px-5 py-4 sm:px-6">Employee</th><th className="px-5 py-4 sm:px-6">Adjustment Type</th><th className="px-5 py-4 sm:px-6">Original</th><th className="px-5 py-4 sm:px-6">Revised</th><th className="px-5 py-4 sm:px-6">Status</th></tr>
										</thead>
										<tbody>
											{adjustments.map((item) => (
												<tr key={item.employee} className="border-t border-slate-100 text-sm text-slate-700">
													<td className="px-5 py-4 sm:px-6"><div className="flex items-center gap-3 font-semibold text-slate-900"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f51ff,#91b2ff)] text-[11px] font-black text-white">{item.employee.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>{item.employee}</div></td>
													<td className="px-5 py-4 sm:px-6">{item.role}</td>
													<td className="px-5 py-4 sm:px-6 text-slate-500">{item.original}</td>
													<td className="px-5 py-4 sm:px-6 font-semibold text-[#0f51ff]">{item.revised}</td>
													<td className="px-5 py-4 sm:px-6"><StatusPill tone={item.status === 'APPROVED' ? 'bg-blue-50 text-blue-700' : item.status === 'PENDING' ? 'bg-slate-100 text-slate-600' : 'bg-rose-50 text-rose-700'}>{item.status}</StatusPill></td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</article>

							<div className="space-y-5">
								<article className="rounded-[26px] border border-slate-200/80 bg-white p-5 sm:p-6">
									<div className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.22em] text-slate-500">Coverage Heatmap</div>
									<div className="grid grid-cols-7 gap-2">
										{heatmap.flatMap((row, rowIndex) => row.map((level, colIndex) => <span key={`${rowIndex}-${colIndex}`} className={`aspect-square rounded-md ${level === 'high' ? 'bg-blue-600' : level === 'medium' ? 'bg-blue-300' : 'bg-slate-200'}`} />))}
									</div>
									<p className="mt-4 text-sm leading-6 text-slate-500">Critical staffing gaps detected on Thursday afternoons. Consider reallocating flex-time staff.</p>
								</article>

								<article className="rounded-[26px] bg-[#0f51ff] p-5 text-white sm:p-6">
									<div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80"><FiChevronDown className="h-3.5 w-3.5 rotate-90" /> Efficiency Tip</div>
									<h3 className="mt-4 max-w-xs text-2xl font-black tracking-[-0.05em]">Optimize Night Coverage</h3>
									<p className="mt-3 text-sm leading-6 text-blue-50/90">Analysis shows a 15% increase in productivity when Night shifts overlap by 30 minutes with Morning arrivals.</p>
									<button className="mt-5 inline-flex rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-[#0f51ff] transition hover:-translate-y-0.5">Update Preferences</button>
								</article>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	)
}