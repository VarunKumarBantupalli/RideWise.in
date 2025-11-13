export default function ServerWakeNotice() {
  return (
    <div className="w-full bg-yellow-100 text-yellow-800 text-center py-2 text-sm font-medium">
      🚀 Our backend server is hosted on a free plan.  
      The first request may take up to 60 seconds to load while the server wakes up.
    </div>
  );
}
